import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  let a = {
    name: 'mascara',
    price: 7.99,
    inventory: 200
  }
  let b = {
    name: 'lipstick',
    price: 5.99,
    inventory: 150
  }
  let c = {
    name: 'eyeliner',
    price: 6.99,
    inventory: 100
  }
  let totalInventory = a.inventory + b.inventory + c.inventory
  console.log(totalInventory)
  // useEffect(() => {
  //   if (counter > 100) { 

  return (
    <div className="App">
     <header className="App-header">
      <h1> Counter: {counter.toFixed(2)} </h1>
      <div className='button-container'>
          <button onClick={() => setCounter(0)}> RESET </button>
          <button onClick={() => setCounter(counter + a.price)}> {a.name}</button>
          <button onClick={() => setCounter(counter + b.price)}> {b.name}</button>
          <button onClick={() => setCounter(counter + c.price)}> {c.name}</button>
      </div>
     </header> 
    </div>
  )
}

export default App;
