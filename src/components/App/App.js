import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const bidrs = useSelector(state => state.bidrs);

  return (
    <div class="wrapper">
      <h1>Bird List</h1>
      <ul>
        {
          bidrs.map((bird) => (
            <li key={bird.name}>
              <h2>{bird.name}</h2>
              <div>Views: {bird.views}</div>
              <button><span role="img" aria-label="add">➕</span></button>
            </li>
          ))
        }
      </ul>
    </div>
  )

}

export default App;