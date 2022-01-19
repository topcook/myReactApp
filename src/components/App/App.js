import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) =>({...state, 
  [event.target.name]:event.target.value
})

function App() {

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {})


  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() =>setSubmitting(false), 3000);
  }

  return (
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting && <div>Submiting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={setFormData}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
