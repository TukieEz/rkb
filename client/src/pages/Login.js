import React, { useContext, useState} from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login } from '../http/userAPI';
import {Context} from '../index'

const Login = () =>{

  const [phone_number, setPhone_number] = useState('') 
  const [password, setPassword] = useState('') 
  const {user} = useContext(Context)
  const navigate = useNavigate()


  const logIn = async () => {
    try {
      const data = await login(phone_number, password);
      user.setUser(data); // Устанавливаем данные пользователя в MobX
      console.log(data.token);
      console.log(data);
      
      user.setIsAuth(true); // Устанавливаем статус авторизации
      navigate(SHOP_ROUTE); // Переход на главную страницу
    } catch (e) {
      alert('Ошибка');
    }
  };

  

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 56}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h3 className='m-auto'>Авторизация</h3>
        <Form className='d-flex flex-column'>
            <Form.Control
              className='mt-3' 
              placeholder='Введите номер телефона'
              value={phone_number}
              onChange={e => setPhone_number(e.target.value)}
            />
            <Form.Control
              className='mt-3' 
              placeholder='Введите пароль'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button className='mt-3 mb-2' onClick={logIn}>
              Войти
            </Button>
            <div>
              Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
            </div>
        </Form>

      </Card>
    </Container>
  );
}

export default Login;
