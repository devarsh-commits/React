import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
 const [value,setvalue]=useState(0);
 const [color,setcolor]=useState(1);
 useEffect(()=>{
  alert("value of count is increased")
  setcolor(color+1) //this works when the count is triggere
 },[value]);

  return (
    <>
    <Navbar color={"the value of color is "+color}/>
    <div>The value of count is = {value}</div>
    <button onClick={()=>{setvalue(value+1)}}>Increment</button>
    </>
  )
}

export default App
