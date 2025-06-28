import React from 'react'
import { NavLink ,Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-screen h-14 bg-green-400 text-white flex items-center justify-center'>
        <ul className=' flex items-center justify-around w-[70%]'>
            <li><NavLink className={(e)=>{ return e.isActive?(' text-xl transition-all ease-in-out duration-100 text-black'):''}} to={'/'} >Home</NavLink></li>
            <li><NavLink className={(e)=>{ return e.isActive?('text-xl transition-all ease-in-out duration-100 text-black'):''}} to={'/aboutus'}>Aboutus</NavLink></li>
            <li><NavLink className={(e)=>{ return e.isActive?('text-xl transition-all ease-in-out duration-100 text-black'):''}} to={'/contact'}>Contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Nav