import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) =>({...state, 
  [event.name]:event.value
})

function App() {

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {})


  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() =>setSubmitting(false), 3000);
  }

  const handleChange = event =>{
    setFormData({
      name: event.target.name,
      value: event.target.value
    })
  }

  return (
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting && <div>Submiting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
