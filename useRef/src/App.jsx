import { useState ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{console.log("rerendering")},[count])  //evertime useEffect runner;
  const btnref=useRef();
  btnref.current.style.background="red";
  return (
    <>
     <div>The value of count is {count}</div>
     <button ref={btnref} onClick={()=>{setCount(count+1)}}>Increment</button>
    </>
  )
}

export default App
