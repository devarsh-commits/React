import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(true)
  const [todos, settodos] = useState([{
    "title": "hii this is 1st title",
    "desc": "hii this is 1st desc"
  }, {
    title: "hii this is 2nd title",
    desc: "hii this is 2nd desc"
  }, {
    title: "hii this is 3rd title",
    desc: "hii this is 3rd desc"
  }, {
    title: "hii this is 4th title",
    desc: "hii this is 4th desc"
  }])
  // function todo({ todo }) {
  //   return (<>
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </>)
  // }

  return (
    <>
      <div>
        {
          todos.map(data=>{
            <div style={{border:"2px solid red"}}><div>{data.title}</div><div>{data.desc}</div></div>
          })
        }
       
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {showbtn ? <button>I am shown as value is true</button> : <button>I am shown bcz value is false</button>}
        {/* {showbtn && <button>I am shown bcz value is true</button>} */}
        <button onClick={() => { setshowbtn(!showbtn) }}>Click me</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
