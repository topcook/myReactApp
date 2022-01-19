import React, { useEffect, useState } from 'react';
import './App.css';
import { getList, setItem } from '../../services/list';

function App() {
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);

  const [itemInput, setIteminput] = useState('');

  let mounted = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput)
      .then(() => {
        if (mounted) {
          setIteminput('');
          setAlert(true);
        }
      })
  }

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted)
          setAlert(false);
      }, 2000)
    }
  }, [alert]);

  useEffect(() => {
    if (list.length && !alert) return;
    getList()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [alert, list])

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
            onChange={(e) => setIteminput(e.target.value)}
            value={itemInput}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
      {alert && <h1>Submission successful!</h1>}
    </div>
  )
}

export default App;