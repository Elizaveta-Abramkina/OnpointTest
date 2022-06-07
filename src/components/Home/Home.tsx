import React from 'react';
import './Home.css'
import iconArrow from '../../assets/img/arrow.png'

const Home = () => {
  return (
    <div className='home'>

      <p className='text'>
        <span className='simple-text'>привет,<br/></span>это <span>не</span> коммерческое задание
      </p>
      <button className='button'>
        <span className='img-wrapper'><img src={iconArrow}/></span>
        <p>Что дальше?</p>
      </button>


    </div>
  );
};

export default Home;