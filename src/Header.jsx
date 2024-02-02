import React from 'react';
import menu from './assets/menu.svg';
import './App.css'

function Header() {
  return (
    <div className='header'>
        <img src={menu} alt="menu" width={70} />
        <span className='logo-title'>ANONYMOUS</span>
    </div>
  )
}

export default Header