// import './App.css';
import '../Alert/Alert';
import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper:{
    padding:20
  }
})

function App() {

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
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
