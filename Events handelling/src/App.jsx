import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // const [Name,setName]=useState('dev');
  const [form,setform]=useState({email:'',
    phone:''
  })
  console.log(`${form.email} and ${form.phone}`)
  const box=useRef();
  const rotatefun=()=>{
    alert('hehe')
  }
  function chname(e){
    // setName(e.target.value)
    setform({...form,[e.target.name]:e.target.value})
  }
  function chcolor(){
    box.current.style.background=Name;
  }
 
  
  return (
    <>
      <button onClick={chcolor}>Click ME</button>
     <div onDrag={rotatefun} ref={box} className="box"></div>
      <input type="text" name='email' value={form.email} onChange={chname} />
      <input type="text"value={form.phone} name='phone' onChange={chname} />
      
    </>
  )
}

export default App
