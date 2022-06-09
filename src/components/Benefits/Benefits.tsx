import React, {useState} from 'react';
import './Benefits.css'
import BenefitItem from "./atom/BenefitItem";

const slideList = [
  [{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',number: '01'},
    {text:'LFaucibus pulvinar elementum integer enim',number: '02'},
    {text:'Faucibus pulvinar elementum integer enim',number: '03'},
  ],
  [
    {text:'Mi bibendum neque egestas congue quisqueegestas diam',number: '04'},
    {text:'Venenatis lectus magna fringilla urna',number: '05'},
    {text:'Venenatis lectus magna fringilla urna',number: '06'},
  ]
]

const Benefits = () => {

  const [slideNumber, setSlideNumber] = useState<number>(0)


  const handleRight =  () => {
    if(slideNumber < slideList.length-1)
    setSlideNumber(slideNumber+1)
  }

  const handleLeft=  () => {
    if(slideNumber > 0)
      setSlideNumber(slideNumber-1)
  }

  return (
    <div className='benefits cards-text'>
      <div>
        {slideList[slideNumber].map((el)=>(
          <BenefitItem text={el.text} number={'el.number'} key={el.number}/>))
        }
      </div>

      <div className='navigation' >
        <span className='arrow left' onClick={handleLeft}> </span>
        <span className='round'> </span>
        <span className='round'> </span>
        <span className='arrow right' onClick={handleRight}> </span>
      </div>
    </div>
  );
};

export default Benefits;