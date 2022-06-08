import React from 'react';
import './BranPage.css'
import bottleIcon from './../../assets/img/bottle.png'
import calendarIcon from './../../assets/img/icon1.png'
import plateIcon from './../../assets/img/icon2.png'
import TextBlock from "../../components/TextBlock/TextBlock";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";


const BrendPage = () => {
  return (
    <div className='brend'>
      <img className='bottle-img' src={bottleIcon} alt='bottle'/>

      <div className='brend-content'>
        <div className='brendn-text'>
          <div>
            <p className='simple-text'>ключевое сообщение</p>
            <h1 className='main-text'>brend <span className='accent-text'>XY</span></h1>
          </div>
        </div>

        <div className='brend-blocks'>
          <TextBlock icon={plateIcon} text='Ehicula ipsum a arcu cursus vitae. Eu non diam
        phasellus vestibulum lorem sed
        risus ultricies'/>
          <div>
            <TextBlock icon={calendarIcon} text='A arcu cursus vitae'/>
            <ButtonComponent text="Подробнее"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrendPage;