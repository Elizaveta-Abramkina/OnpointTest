import React from 'react';
import './TextBlock.css'

interface IProps {
  icon: string,
  text: string
}
const TextBlock = ({icon, text}:IProps) => {
  return (
    <div className='text-block'>
      <img src={icon} alt={icon}/>
      <p>{text}</p>
    </div>
  );
};

export default TextBlock;