import React, { useState} from 'react';
import './BrendPage.css'
import closeBtn from '../../assets/img/close.png'
import bottleIcon from './../../assets/img/bottle.png'
import calendarIcon from './../../assets/img/icon1.png'
import plateIcon from './../../assets/img/icon2.png'
import TextBlock from "../../components/TextBlock/TextBlock";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import Benefits from "../../components/Benefits/Benefits";


const BrendPage = () => {

  const [popUp, setPopUp] = useState<boolean>(false)
  const [popUpStyle, setPopUpStyle] = useState(
    {styleContent: 'brend-content',
              styleBrend: 'brend',
              text: 'ключевое сообщение'}
              )

const changePopUp = () =>{
  setPopUp(!popUp)
  setPopUpStyle({styleContent: 'brend-content popup-content',
    styleBrend: 'brend popup-brend',
    text: 'преимущества'})



}

  const showPopUp = () => {
   return !popUp ? (
      <div className='brend-blocks'>
        <TextBlock icon={plateIcon} text='Ehicula ipsum a arcu cursus vitae. Eu non diam
        phasellus vestibulum lorem sed
        risus ultricies'/>
        <div>
          <TextBlock icon={calendarIcon} text='A arcu cursus vitae'/>
          <ButtonComponent text="Подробнее" onClick={changePopUp}/>
        </div>
      </div>
    ) : (
      <div className='popup'>
        <img className='close-btn' src={closeBtn} alt='close'/>
          <Benefits/>
      </div>
    )
  }


  return (

    <div className={popUpStyle.styleBrend}>
        <img className='bottle-img' src={bottleIcon} alt='bottle'/>
        <div className={popUpStyle.styleContent} >
          <div className='brend-text'>
            <p className='simple-text'>{popUpStyle.text}</p>
            <h1 className='brend-main-text'>brend <span className='accent-text'>XY</span></h1>
          </div>
          {showPopUp()}
        </div>

      </div>

  );
};

export default BrendPage;