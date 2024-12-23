const ApiError = require('../error/ApiError')
const { User } = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, name, surname, middlename, phone_number, sex, department_id, specialization_id, permission) => {
    return jwt.sign(
        { id, name, surname, middlename, phone_number, sex, department_id, specialization_id, permission }, 
        process.env.SECRET_KEY,
        { expiresIn: '168h' } // Токен действителен 7 дней
    )
}

class UserController {
    async registration(req, res, next) {
        const { name, surname, middlename, phone_number, password, sex, department_id, specialization_id } = req.body;
    
        if (!name || !surname || !phone_number || !password || !department_id || !specialization_id) {
            return next(ApiError.badRequest("Заполните обязательные поля"));
        }
    
        const candidate = await User.findOne({ where: { phone_number } });
    
        if (candidate) {
            return next(ApiError.badRequest("Пользователь уже зарегистрирован"));
        }
    
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({
            name,
            surname,
            middlename,
            phone_number,
            password: hashPassword,
            sex,
            department_id,
            specialization_id,
            permission_id: 2
        });
    

        const token = generateJwt(
            user.user_id, 
            user.name, 
            user.surname, 
            user.middlename, 
            user.phone_number, 
            user.sex, 
            user.department_id, 
            user.specialization_id, 
            user.permission_id
        );
        
        return res.json({ token });
    }
    

    async login(req, res, next) {
        const { name, surname, middlename, phone_number, password, sex, department_id, specialization_id } = req.body;
    
        const user = await User.findOne({ where: { phone_number } });
    
        if (!user) {
            return next(ApiError.badRequest("Пользователь не найден"));
        }
    
        let comparePassword = bcrypt.compareSync(password, user.password);
    
        if (!comparePassword) {
            return next(ApiError.badRequest("Неверный пароль"));
        }
    

        const token = generateJwt(
            user.user_id, 
            user.name, 
            user.surname, 
            user.middlename, 
            user.phone_number, 
            user.sex, 
            user.department_id, 
            user.specialization_id, 
            user.permission_id
        );
        
        return res.json({ token });
    }
    

    async check(req, res, next) {
        const token = generateJwt(req.user.user_id, req.user.phone_number, req.user.permission_id)
        return res.json({ token })
    }
}

module.exports = new UserController()
