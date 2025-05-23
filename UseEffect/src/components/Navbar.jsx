import React, { useEffect } from 'react'

const Navbar = ({color}) => {
  useEffect(()=>{alert("I run everytime")});
  useEffect(()=>{alert("I render for 1st time only")},[]);
  useEffect(()=>{alert(" i run when the color is triggered")},[color]);
  return (
    <div>
      I am Navbar and my value is {color};
    </div>
  )
}

export default Navbar;