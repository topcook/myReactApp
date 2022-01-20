import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addBird, incrementBird } from '../../store/birds/birds';

function App() {

  const [birdName, setBird] = useState('');

  const birds = [...useSelector(state => state.birds)].sort((a,b)=>{
    return a.name.toLowerCase() >b.name.toLowerCase() ? 1: -1;
  })

  // console.log("birds: ", birds);

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBird(birdName));
    setTimeout(() => setBird(''), 2000);
  }

  return (
    <div className="wrapper">
      <h1>Bird List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>
            Add Bird
          </p>
          <input type="text" value={birdName} onChange={(e) => setBird(e.target.value)} />
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
              <button onClick={() => dispatch(incrementBird(bird.name))}><span role="img" aria-label="add">➕</span></button>
            </li>
          ))
        }
      </ul>
    </div>
  )

}

export default App;