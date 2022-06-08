import React from 'react';
import './ButtonComponent.css'
import iconArrow from "../../assets/img/arrow.png";

interface IProps {
  text: string
}

const ButtonComponent = ({text}:IProps) => {
  return (
    <div className='button-wrapper'>
    <button className='button'>
      <span className='img-wrapper'><img src={iconArrow} alt='arrow'/></span>
      <p>{text}</p>
    </button>
    </div>
  );
};

export default ButtonComponent;