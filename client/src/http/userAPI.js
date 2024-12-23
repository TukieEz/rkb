import { $hostAuth, $host } from "./index";
import {jwtDecode} from 'jwt-decode'

export const login = async (phone_number, password) => {
    const { data } = await $host.post('api/user/login', { phone_number, password });
    if (!data || !data.token) {
        throw new Error('Токен не был получен из ответа сервера');
    }
    console.log('Полученный токен:', data.token); // Для отладки
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
};

  

export const registration = async(name, surname, middlename, phone_number, sex, department_id, specialization_id) => {
    const { data } = await $host.post('api/user/registration', { name, surname, middlename, phone_number, sex, department_id, specialization_id });
    if (!data || !data.token) {
        throw new Error('Токен не был получен из ответа сервера');
    }
    console.log('Полученный токен:', data.token); // Для отладки
    localStorage.setItem('token', data.token);
    return {
        firstName: name,
        middleName: middlename,
        lastName: surname,
        token: jwtDecode(data.token),
    };
};


export const check = async() => {
    const {data} = await $hostAuth.get('api/user/auth',)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}