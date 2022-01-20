import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const birds = useSelector(state => {
    return state.birds
  });

  console.log("birds: ", birds);

  return (
    <div className="wrapper">
      <h1>Bird List</h1>
      <form>
        <label>
          <p>
            Add Bird
          </p>
          <input type="text" />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {
          birds.map((bird) => (
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