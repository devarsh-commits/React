import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'
import Card from './components/Card'

function App() {
  const [data,setdata]=useState([1]);
  let btn1=useRef();
  useEffect(async()=>{
    let a=await fetch('https://jsonplaceholder.typicode.com/posts');
    setdata(await a.json())
  },[])
    // setdata(response)
  

  return (
    <>
   <div className="nav"><Nav/></div>
   <div className="cards">
  {
    data.map((dt)=>{
      return <Card key={dt.id} title={dt.title} body={dt.body}/>
    })
  }
   </div>

    </>
  )
}

export default App
