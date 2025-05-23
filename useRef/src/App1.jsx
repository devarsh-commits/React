import { useState ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App1() {
  const [count, setCount] = useState(0);
  useEffect(()=>{console.log("rerendering")},[count])  //evertime useEffect runner;
  const a=useRef(0)
  a.current=a.current +1;
  console.log(a.current)
  return (
    <>
     <div>The value of count is {count}</div>
     <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </>
  )
}

export default App1