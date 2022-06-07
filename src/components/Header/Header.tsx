import React from 'react';
import iconHome from '../../assets/img/home.png'
import './Header.css'
import './../../assets/fonts/fonts.css'
const Header = () => {

  return (
    <div className='header'>
      <img src={iconHome} alt="IconHome" className='icon-home'/>
      <h1 className='logo-name'>project</h1>
    </div>
  );
};

export default Header;