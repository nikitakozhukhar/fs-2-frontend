// import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="background-container">
      <div className="container">
        <div className="header-row">
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">О нас</li>
              <li className="nav-item">Как это работает</li>
              <li className="nav-item">Отзывы</li>
              <li className="nav-item">Контакты</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
