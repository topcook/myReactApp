import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';

function setToken(userToekn) {
  sessionStorage.setItem('token', JSON.stringify(userToekn));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className='wrapper'>
      <h2>Application</h2>
      <BrowserRouter>
        <nav>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/preferences'>Preferences</Link></li>
        </nav>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/preferences' element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
