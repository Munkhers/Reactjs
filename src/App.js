import React from 'react';
// import BmiTracker from './Components/BMI';
import ColorPicker from './Components/ColorPicker';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import MemoryGame from './Components/MemoryGame/cards';
import LiveClock  from './Components/LiveClock';
import ImageSlider from './Components/ImageSlider';
import ToDo from './Components/ToDo';
import TicTacToe from './Components/TicTacToe';
import Navbar from './Components/navBar/Navbar';
import API from './Components/api-call-playground'
import CNJokes from './Components/ChuckNorris';
import GitHubAccount from './Components/GitHubAccount';




function App() {
  return (
    <div>
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
              <Route path="API" element={<API />} />
              <Route path="CN" element={<CNJokes />} />
              <Route path="githubaccount" element={<GitHubAccount />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Outlet />
    </div>
  );
}

export default App;