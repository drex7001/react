import logo from './logo.svg';
import './App.css';
import Button from './componenets/Button'
import ShoppingList from './componenets/ShoppingList';
import Counter from './componenets/Counter';

function App() {
  const count = 0;
  return (
    <div className="App">
      <h1>Hello</h1>
      <Counter></Counter>
      {/* <img className="avatar" />
      <Button></Button>
      <h1>{count}</h1>
      <Button></Button> */}
      {/* <ShoppingList></ShoppingList> */}
    </div>
  );
}

export default App;
