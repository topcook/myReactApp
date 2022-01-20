import React from 'react';
import './App.css';
import Manatee from '../Manatee/Manatee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Whale from '../Whale/Whale';

function App() {
  return (
    <div className='wrapper'>
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Manatee />} />
          <Route path='/whale' element={<Whale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
