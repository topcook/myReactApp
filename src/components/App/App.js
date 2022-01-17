// import './App.css';
import '../Alert/Alert';
import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess';

function App() {

  const wrapper =  {
    padding:20
  }

  return (
    <div style = {wrapper}>
      <Alert 
      title = "Itmes Not Added"
      type = "error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
  );
}

export default App;
