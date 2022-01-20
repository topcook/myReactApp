import React from 'react';
import './App.css';
import Manatee from '../Manatee/Manatee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Manatee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
