import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[name,setname]=useState('');
  const[lst,setlst]=useState('');
  const input1=useRef();
  const input2=useRef();
  const handelclick=()=>{
//  alert("new data is being entered")
 setname(input1.current.value)
  }
   const handelclick2=()=>{
//  alert("new data is being entered")
 setlst(input2.current.value)
  }
  
  

  return (
    <>
     <div className="login flex flex-col gap-6">
     <div className='flex gap-4'> <label htmlFor="text1">Enter the name of person</label>
      <input  ref={input1} className='border' type="text" id='text1' placeholder='enter the name of the persion'/></div>
     <div className='flex gap-4'> <label htmlFor="text2">Enter the Surname </label>
      <input ref={input2} className=" border"type="text" id='text2' placeholder='Enter the last name' /></div>
     </div>
     <button className='border w-10 bg-amber-500 text-white rounded' onClick={()=>{
      handelclick()
      handelclick2()
     }}>Save </button>
     <p>{`Generate ticket for ${name} ${lst}`}</p>
    </>
  )
}

export default App
