import React from 'react';
import { Link } from 'react-router-dom';
import './header/header.css';

const Header = ({ onAddPlace }) => {
  return (
    <header className='header page__section'>
      {/* <i className="wi wi-day-sunny logo"></i>     */}
      <Link to='/'>
        <h1 className='header__logo'>Апертура</h1>
      </Link>
    </header>
  );
};

export default Header;
