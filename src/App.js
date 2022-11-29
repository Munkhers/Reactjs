
// import './App.css';
// import logo from "./logo.svg";
import React from 'react';
// import BmiTracker from './Components/BMI';
import ColorPicker from './Components/ColorPicker';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import MemoryGame from './Components/MemoryGame/cards';
import LiveClock  from './Components/LiveClock';
// import ControlledComp from './Components/controlledComp';
// import EmployeeList from './Components/EmployeeList';
import ImageSlider from './Components/ImageSlider';
import ToDo from './Components/ToDo';
import TicTacToe from './Components/TicTacToe';
import Navbar from './Components/navBar/Navbar';




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
        {/* <BmiTracker/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<MemoryGame />} />
              <Route path="memorygame" element={<MemoryGame />} />
              <Route path="tictactoe" element={<TicTacToe />} />
              <Route path="colorpicker" element={<ColorPicker />} />
              <Route path="liveclock" element={<LiveClock />} />
              <Route path="imageslider" element={<ImageSlider />} />
              <Route path="todo" element={<ToDo />} />
            </Route>
          </Routes>
        </BrowserRouter>

        <Outlet />

    </div>
  );
}

export default App;