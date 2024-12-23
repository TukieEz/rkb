import React from 'react';
import './Menu.css';

const Menu = ({ items, active, setActive }) => {
  return (
    <div className={active ? 'menu active' : 'menu'}>
      <div className="blur" onClick={() => setActive(false)} />
      <div className="off-screen-menu">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span className="material-symbols-outlined">{item.icon}</span>
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;