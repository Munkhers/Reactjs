
// import './App.css';
// import logo from "./logo.svg"
import React from 'react';
// import ImageSlider from './Components/ImageSlider';
import ToDo from './Components/ToDo';
// import MemoryGame from './Components/MemoryGame/cards';
// import TicTacToe from './Components/TicTacToe';




function App() {

  return (
    <div className="App">
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' height='150' width='150' /> */}
        {/* <TicTacToe/> */}
        <ToDo/>
        {/* <ImageSlider/> */}
      </header>
    </div>
  );
}

export default App;