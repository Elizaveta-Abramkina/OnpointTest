import React from 'react';
import './BenefitItem.css'

interface IProps {
  text: string,
  number: string
}
const BenefitItem = ({text, number}:IProps) => {
  return (
    <div className='benefit-item'>
      <p className='benefit-item-number'>{number}</p>
      <p className='benefit-item-text'>{text}</p>
    </div>
  );
};

export default BenefitItem;