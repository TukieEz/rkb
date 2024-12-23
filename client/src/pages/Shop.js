import React, { useContext, useState } from 'react';
import '../css/Shop.css';
import Menu from './Menu/Menu';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const Shop =  observer(() => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: 'Главная', href: '/', icon: 'home' },
    { value: 'События', href: '/about', icon: 'toolbar' },
    { value: 'Добавить', href: '/device', icon: 'add_circle' },
    { value: 'Настройка', href: '/basket', icon: 'settings' },

  ];
  const {user} = useContext(Context)
  const navigate = useNavigate();

  const formatUserName = (firstName, middleName, lastName) => {
    if (!firstName || !middleName || !lastName) {
      return 'Неизвестный пользователь';
    }
    return `${firstName.charAt(0)}.${middleName.charAt(0)}. ${lastName}`;
  };

  return (
    <div>
      <nav>
        <div
          className={`ham-menu ${menuActive ? 'active' : ''}`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} items={items} />
      <main>
      <div className="main-content">
        <img src={require('../img/big-logo.png')}alt="Центральная фотография" />
      </div>
      <div className="info-container">
        {/* Первый контейнер */}
        <div className="info-box">
          <p>
            Зарегистрировано сегодня: <br />
            <span className="highlight">5</span> <span className="normal-text">нежелательных событий</span>
          </p>
          <img src={require('../img/diag.png')} alt="Сегодня" />
          <p className="bottom_inscription">*данные представленны по отделам</p>
        </div>
        {/* Второй контейнер */}
        <div className="info-box">
        <p>
            Зарегистрировано за месяц: <br />
            <span className="highlight">50</span> <span className="normal-text">нежелательных событий</span>
          </p>
          <img src={require('../img/diag.png')} alt="За месяц" />
          <p className="bottom_inscription">*данные представленны по отделам</p>
        </div>
      </div>
      <div className="login-button">
          {user.isAuth ? (
            <div>
              <p>{formatUserName(user.user.name, user.user.middlename, user.user.surname)}</p>
              <button id="logoutBtn" onClick={() => user.setIsAuth(false)}>Выйти</button>
            </div>
          ) : (
            <button id="loginBtn" onClick={() => navigate(LOGIN_ROUTE)}>Войти</button>
          )}
      </div>
    </main>
    </div>
  );
});

export default Shop;