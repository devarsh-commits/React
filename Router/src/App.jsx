import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
   const router=createBrowserRouter([
    {
      path:'/',
      element:<><Nav/><Home/></>
    },
    {
      path:'/about',
      element:<><Nav/><About/></>
    },
    {
      path:'contact',
      element:<><Nav/><Contact/></>
    }
   ])

  return (
    <>
     {/* <Nav/> */}
     <RouterProvider router={router}/>
      
    </>
  )
}

export default App
