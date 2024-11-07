import React, { useState } from 'react'
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(
      count + 1
    );
  };

  const decrement = () => {
    setCount(
      count - 1
    );
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p className='p-coun'>Count:{count}</p>
      <button class='btn btn-primary' onClick={increment}>Increment</button>&nbsp;&nbsp;
      <button class='btn btn-danger' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter