import React from 'react';
import './Description.css'
import bottleIcon from './../../assets/img/bottle.png'
import calendarIcon from './../../assets/img/icon1.png'
import plateIcon from './../../assets/img/icon2.png'
import TextBlock from "../TextBlock/TextBlock";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const Description = () => {
  return (
    <div className='description'>
      <img className='bottle-img' src={bottleIcon} alt='bottle'/>
      <div className='description-content'>
        <TextBlock icon={calendarIcon} text='Ehicula ipsum a arcu cursus vitae. Eu non diam
        phasellus vestibulum lorem sed
        risus ultricies'/>
        <div>
          <TextBlock icon={plateIcon} text='A arcu cursus vitae'/>
          <ButtonComponent text="Подробнее"/>
        </div>
      </div>
    </div>
  );
};

export default Description;