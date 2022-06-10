import React, {useState} from 'react';
import './App.css'
import './backgrounAnimations.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BrendPage from './pages/BrendPage/BrendPage';
import Home from "./pages/Home/Home";
import Description from "./pages/Description/Description";


const App = () => {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [value, setValue] = useState<number>(0)
  const [swipe, setSwipe] = useState<'left-swipe' | 'right-swipe' | null>(null)

  const rightSwipe = () => {
    setSwipe('right-swipe')
    setValue(value - 1)
  }
  const leftSwipe = () => {
    setSwipe('left-swipe')
    setValue(value + 1)
  }

  const goHome = () => {
    console.log('home')
    setValue(0)
  }

  const position = ['left', 'center', 'right']
  const element = [<Home functionSwipe={leftSwipe} key='home'/>, <Description key='Description'/>,
    <BrendPage key='Brend'/>]
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
    setTimeout(() => setSwipe(null), 500)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && value <= 1 && value >= 0) {
      leftSwipe()
      resetSwipe()
    }

    if (isRightSwipe && value >= 1) {
      rightSwipe()
      resetSwipe()
    }
  }


  return (
    <div className='app' style={style.app} onTouchStart={onTouchStart} onTouchMove={onTouchMove}
         onTouchEnd={onTouchEnd}>

      <div className='element-wrapper' style={style.appScroll}>
        <Header functionHome={goHome}/>
        {element[value]}
      </div>
      <Footer/>
    </div>

  );
};

export default App;