import React, { useEffect, useState } from 'react';
import './App.css';
import { getList, setItem } from '../../services/list';

function App() {
  const [list, setList] = useState([]);

  const [itemInput, setIteminput] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    setItem(itemInput);
  }

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {list.map(item => <li key={item.item}>{item.item}</li>)}
      </ul>
      <p>You have entered: {itemInput}</p>
      <form onSubmit={handleSubmit}>
        <label>
          <p>New Item</p>
          <input type="text" 
          onChange={(e) =>setIteminput(e.target.value)}
          value={itemInput}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;