import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';



function App() {
const apiKey ='b58c0dc18b6a8f7295f2b9d5b198c210';
  return (
    <>
    <Navbar/>
    <Weather apiKey={apiKey}/>
    </>
  );
}

export default App;
