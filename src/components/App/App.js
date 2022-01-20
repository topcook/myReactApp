import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementBird } from '../../store/birds/birds';

function App() {

  const birds = useSelector(state => {
    return state.birds
  });

  // console.log("birds: ", birds);

  const dispatch = useDispatch()

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
              Views: {bird.views}
              <button onClick={()=>dispatch(incrementBird(bird.name))}><span role="img" aria-label="add">➕</span></button>
            </li>
          ))
        }
      </ul>
    </div>
  )

}

export default App;