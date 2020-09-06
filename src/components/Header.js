import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <div className="Header">
        <header className='header'>
          <img src={logo} alt='Around The U.S. text logo' className='logo' />
        </header>
    </div>
    );
}

export default Header;