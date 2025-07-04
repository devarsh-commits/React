import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Error,setError]=useState();
  const [Inputval,setInputval]=useState({
    name:"",
    email:"",
    password:""
  })
  const [ello,setello]=useState("hehe")

  const HandelOnchange=(e) => {
    setInputval({...Inputval,[e.target.name]:e.target.value})

  }
  const ValidationErr=(params) => {
    const newerror={};
    if(!Inputval.name.trim){
      newerror.name="Enter your name"
    }
    if(!Inputval.email){
      newerror.email="Enter your email"
    }
    else if(!/\S+@\S+\.\S+/.test(Inputval.email)){
      newerror.email="Email is invalid"
    }
    if(!Inputval.password){
      newerror.pass='Enter the password'
    }
    else if(Inputval.password.length<6){
      newerror.pass='Pls enter valid pass'
    }
    return newerror;
  }
  const HandelSubmit=(params) => {
    const Errors=ValidationErr();
    if(Object.keys(Errors).length===0){
      alert("Data Saved Successfully");
      setInputval({
            name:"",
    email:"",
    password:""
      })
      setError({})
    }
    else{
      alert("Enter Valid Values")
      setError(Errors)
    }
    
  }
  
  
  
  

  return (
    <>
     <form action="">
      <label htmlFor="name">Enter Your name</label>
      <input type="text" value={Inputval.name} name='name' onChange={HandelOnchange} id='name' />
      <label htmlFor="mail">Email Address</label>
      <input type="email" value={Inputval.email} name='email' onChange={HandelOnchange} id='mail' />
      <label htmlFor="pass">Enter Your PassWord</label>
      <input type="password" value={Inputval.password} name='password' onChange={HandelOnchange} id='pass' />
     </form>
     <button onClick={HandelSubmit}>Submit</button>
     
    </>
  )
}

export default App
