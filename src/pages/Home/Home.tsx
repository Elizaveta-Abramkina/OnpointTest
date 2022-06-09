import React from 'react';
import './Home.css'
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

interface IProps {
  functionSwipe:()=>void
}

const Home = ({functionSwipe}:IProps) => {

  return (
    <div className='home'>
      <div className='home-content main-text'>
        <p className='simple-text'>привет,</p>
        <p>это <span className='accent-text'>не</span></p>
        <p>коммерческое </p>
        <div>
          <p>задание</p>
          <ButtonComponent text={'Что дальше?'} onClick={functionSwipe} /></div>
      </div>
    </div>
  );
};

export default Home;