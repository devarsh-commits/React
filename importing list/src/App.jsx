import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos,settodos]=useState([
    {title:"this is first title",
      desc:"this is first desc"
    },
     {title:"this is second title",
      desc:"this is second desc"
    },
    
  ])

  // const todo=({todo})=>{
  //   return(
  //     <div>
  //       <div>{todo.title}</div> 
  //       <div>{todo.desc}</div> 
  //     </div>
  //   )
  // }
  return (
    <>
     <div>This value of count is {count}</div>
     <button onClick={()=>setCount(count+1)}>Click to increase</button>   
     {todos.map(todo=>{
      return <div>
        <div>{todo.title}</div>
        <div>{todo.desc}</div>
      </div>
      
     })} 
    </>
  )
}

export default App
