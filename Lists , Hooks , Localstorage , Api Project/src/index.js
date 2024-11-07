import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './Todo';
import Counter from './Counter';
import Listul from './Listul'
import Registration from './Registration';
import MouseMoveComponent from './MouseMoveComponent';
import Loginout from './Loginout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Counter />
    <Loginout />
    <Todo />
    <Listul />
    <Registration />
    <MouseMoveComponent />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
