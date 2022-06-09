import React, {useState} from 'react';
import './BrendPage.css'
import closeIcon from '../../assets/img/close.png'
import bottleIcon from './../../assets/img/bottle.png'
import calendarIcon from './../../assets/img/icon1.png'
import plateIcon from './../../assets/img/icon2.png'
import TextBlock from "../../components/TextBlock/TextBlock";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import Benefits from "../../components/Benefits/Benefits";

interface IState {
  styleContent: string,
  styleBrend: string,
  text: string
}

const BrendPage = () => {

  const state:IState = {
    styleContent: 'brend-content',
    styleBrend: 'brend',
    text: 'ключевое сообщение'
  }

  const [popUp, setPopUp] = useState<boolean>(false)
  const [popUpStyle, setPopUpStyle] = useState(state)



  const openPopUp = () => {
    setPopUp(!popUp)
    setPopUpStyle({
      styleContent: 'brend-content popup-content',
      styleBrend: 'brend popup-brend',
      text: 'преимущества'
    })
  }

  const closePopup = ()=>{
    setPopUp(!popUp)
    setPopUpStyle(state)
  }

  const showPopUp = () => {
    return !popUp ? (
      <div className='brend-blocks'>
        <TextBlock icon={plateIcon} text='Ehicula ipsum a arcu cursus vitae. Eu non diam
        phasellus vestibulum lorem sed
        risus ultricies'/>
        <div>
          <TextBlock icon={calendarIcon} text='A arcu cursus vitae'/>
          <ButtonComponent text="Подробнее" onClick={openPopUp}/>
        </div>
      </div>
    ) : (
      <div className='popup'>
        <Benefits/>
      </div>
    )
  }


  return (
    <div className={popUpStyle.styleBrend}>
      <img className='bottle-img' src={bottleIcon} alt='bottle'/>
      <div className={popUpStyle.styleContent}>
        <div className='brend-header'>
          <div>
            <p className='simple-text'>{popUpStyle.text}</p>
            <h1 className='brend-main-text'>brend <span className='accent-text'>XY</span></h1>
          </div>
          {popUp ? <img src={closeIcon} alt='close' className='close-btn' onClick={closePopup}/>: null}
        </div>
        {showPopUp()}
      </div>

    </div>

  );
};

export default BrendPage;