import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <label htmlFor='text'>
        <p>Add your text here</p>
        <textarea 
        id='text'
        name='text'
        rows='10'
        cols='100'>
          
        </textarea>
      </label>
    </div>
  );
}

export default App;
