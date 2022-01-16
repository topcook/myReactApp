import './App.css';
import Instructions from './Instructions';

function App() {
  const greeting = 'greeting';

  const displayEmojiName = event => alert(event.target.id);

  const displayAction = false;

  const emojis = [
    {
      emoji:'😀',
      name: 'test grinning face'
    },
    {
      emoji:'🎉',
      name:'party popper'
    },
    {
      emoji: '💃',
      name: "woman dancing"
      }
  ];

  return (
    <div className='container'>
      <h1 id={greeting} >Hello World!</h1>
      { displayAction && <p>I'm writing JSX</p>}
      <Instructions />
      <ul>
        {
            emojis.map( emoji => (
              <li key = {emoji.name}>
                <button onClick={displayEmojiName}>
                  <span role = "img" aria-label={emoji.name} id = {emoji.name}>{emoji.emoji}</span>
                </button>
              </li>
            ))
        }       
      </ul>
    </div>
  );
}

export default App;
