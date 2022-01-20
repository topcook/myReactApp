import React, { useState } from 'react';
import './App.css';

import CharacterMap from '../CharacterMap/CharacterMap';

function App() {
  const [text, setText] = useState('');

  return (
    <div className='wrapper'>
      <label htmlFor='text'>
        <p>Add your text here</p>
        <textarea
          id='text'
          name='text'
          rows='10'
          cols='100'
          onChange={e => setText(e.target.value)}
        >
        </textarea>
      </label>
      <CharacterMap text={text} />
    </div>
  );
}

export default App;
