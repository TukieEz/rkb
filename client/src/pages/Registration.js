import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/reg.css';
import { registration } from '../http/userAPI';
import {Context} from '../index'


const Registration = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+7');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [specializationId, setSpecializationId] = useState('');
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const signUp = async () => {
    try {
      const data = await registration(
        name,
        surname,
        middlename,
        phoneNumber,
        password,
        sex,
        departmentId,
        specializationId
      );

      user.setUser(data);
      user.setIsAuth(true);

      navigate(SHOP_ROUTE);
    } catch (e) {
      alert('Ошибка при регистрации');
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\+7\d*$/.test(value)) {  // позволяет только номер, начинающийся с +7
      setPhoneNumber(value);
    }
  };




  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }} // Центрирование по вертикали
    >
      <Card className="p-5" style={{ width: '100%', maxWidth: '1500px' }}> {/* Увеличиваем ширину */}
        <h3 className="m-auto">Регистрация</h3>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите фамилию"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите отчество (при наличии)"
            value={middlename}
            onChange={(e) => setMiddlename(e.target.value)}
          />
          <InputGroup className="mt-3">
            <Form.Control
              className="mt-3"
              placeholder="Введите номер телефона"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
          </InputGroup>

          <Form.Group className="mt-3">
            <Form.Label>Укажите ваш пол</Form.Label>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Мужской"
                checked={sex === 'Мужской'}
                onChange={(e) => setSex(e.target.value)}
              />
              <label htmlFor="male"></label> Мужской

              <input
                type="radio"
                id="female"
                name="gender"
                value="Женский"
                checked={sex === 'Женский'}
                onChange={(e) => setSex(e.target.value)}
              />
              <label htmlFor="female"></label> Женский
            </div>
          </Form.Group>

          <InputGroup className="mt-3">
            <Form.Control
              placeholder="Введите ID отдела"
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
            />
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip-right">Этот текст</Tooltip>}
            >
              <InputGroup.Text className="material-symbols-outlined custom-icon">
                help
              </InputGroup.Text>
            </OverlayTrigger>
          </InputGroup>
          <InputGroup className="mt-3">
            <Form.Control
              placeholder="Введите ID специальности"
              value={specializationId}
              onChange={(e) => setSpecializationId(e.target.value)}
            />
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip-right">Этот текст</Tooltip>}
            >
              <InputGroup.Text className="material-symbols-outlined custom-icon">
                help
              </InputGroup.Text>
            </OverlayTrigger>
          </InputGroup>
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button className="mt-3 mb-2" onClick={signUp}>
            Зарегистрироваться
          </Button>
          <div>
            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Registration;