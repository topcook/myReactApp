import React from 'react';
import './App.css';
import Manatee from '../Manatee/Manatee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Whale from '../Whale/Whale';
import NarWhal from '../Narwhal/Narwhal';

function App() {
  return (
    <div className='wrapper'>
      <h1>Marine Mammals</h1>
      <nav>
        <ul>
          <li><a href='/manatee'>Manatee</a></li>
          <li><a href='/narwhal'>Narwhal</a></li>
          <li><a href='/whale'>Whale</a></li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/manatee' element={<Manatee />} />
          <Route path='/narwhal' element={<NarWhal />} />
          <Route path='/whale' element={<Whale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
