import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import nav from './components/nav.js';

function App() {
  <nav/>
  const[value,setValue]=useState(0) //describes the initial value
  return (
    <div className="App">
      <nav/>
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value+1)}}>Clicke me </button>
    </div>
  );
}

export default App;
