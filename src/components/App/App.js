import './App.css';
import AnimalCard from '../AnimalCard/AnimalCard';
import animals from './data';

function App() {
  return(
    <div className='wrapper'>
      <h1>Animals</h1>
      {
        animals.map(animal =>(
          <AnimalCard  
          diet = {animal.diet}
          key = {animal.name} 
          name = {animal.name}
          size = {animal.size}
          />
        ))
      }
    </div>
  );
}

export default App;
