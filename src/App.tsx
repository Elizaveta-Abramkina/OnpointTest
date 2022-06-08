import React, { useState} from 'react';
import './App.css'
import './assets/fonts/fonts.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Description from './components/Description/Description';
import Home from "./components/Home/Home";
/* eslint-disable */


const App = () => {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [value, setValue] = useState<number>(0)
  const [swipe, setSwipe] = useState<'left-swipe' | 'right-swipe'| null>(null)

  const position = ['left', 'center', 'right']
  const element = [<Home/>, <Description/>, <Home/>]
  const style = {
    app: {backgroundPositionX: `${position[value]}`},
    appScroll: {animation: `${swipe} 0.5s`}
  }

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].pageX)

  const resetSwipe = () => {
    setTimeout(()=>setSwipe(null), 550)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart! - touchEnd!
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && value <= 1 && value >=0){
      setSwipe('left-swipe')
      setValue(value + 1 )}
      resetSwipe()
    if (isRightSwipe && value >= 1) {
      setSwipe('right-swipe')
      setValue(value - 1)
      resetSwipe()
    }
  }


  return (
    <div className='app' style={style.app} onTouchStart={onTouchStart} onTouchMove={onTouchMove}
         onTouchEnd={onTouchEnd}>
      <Header/>
        <div className='element-wrapper' style={style.appScroll}>
          {element[value]}
        </div>
      <Footer/>
    </div>

  );
};

export default App;