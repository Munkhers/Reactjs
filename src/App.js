
// import './App.css';
// import logo from "./logo.svg";
import React from 'react';
import BmiTracker from './Components/BMI';
// import ColorPicker from './Components/ColorPicker';
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
// import LiveClock  from './Components/LiveClock';
// import ControlledComp from './Components/controlledComp';
// import EmployeeList from './Components/EmployeeList';
// import ImageSlider from './Components/ImageSlider';
// import ToDo from './Components/ToDo';
// import MemoryGame from './Components/MemoryGame/cards';
// import TicTacToe from './Components/TicTacToe';




function App() {
  // const navigate = useNavigate()

  return (
    
    <div>
      {/* <button onClick={() => { navigate('/todo')}}>Todo</button> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/todo' element={<ToDo/>}/>
          <Route path='/memorygame' element={<MemoryGame/>}/> */}
          {/* <ToDo/> */}
        {/* <ImageSlider/> */}
        {/* <MemoryGame/> */}
        {/* <EmployeeList/> */}
        {/* <ControlledComp/> */}
        {/* <LiveClock/> */}
        {/* <ColorPicker/> */}
        <BmiTracker/>
        {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;