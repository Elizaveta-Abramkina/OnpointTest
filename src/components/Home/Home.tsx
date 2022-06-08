import React from 'react';
import './Home.css'
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const Home = () => {


  return (
    <div className='home'>
      <div className='home-content'>
        <p className='simple-text'>привет,</p>
        <p>это <span className='accent-text'>не</span></p>
        <p>коммерческое </p>
        <div>
          <p>задание</p>
          <ButtonComponent text={'Что дальше?'}/></div>
      </div>
    </div>
  );
};

export default Home;