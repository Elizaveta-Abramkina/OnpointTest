import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';

const App = () => {


  return (
    <div className='app'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
};

export default App;