import './App.css';

function App() {
  const greeting = 'greeting';

  return (
    <div className='container'>
      <h1 id={greeting} >Hello World!</h1>
      <p>I'm writing JSX</p>
      <ul>
        <li>
          <button>
            <span role="img" aria-label="grinning face" id="grinning face" >&#x1F600;</span>
          </button>
        </li>
        <li>
          <button>
            <span role="img" aria-label="party popper" id="party popper">&#x1F389;</span>
          </button>
        </li>
        <li>
          <button>
            <span role="img" aria-label="woman dancing" id="woman dancing" >&#x1F483;</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
