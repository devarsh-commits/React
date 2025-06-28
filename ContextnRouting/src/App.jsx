import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import { DataVal } from './context/Homedt';

function App() {
  const router=createBrowserRouter([
    {
      element:<><Nav/><Home/></>,
      path:'/'
    },
    {
      element:<><Nav/><Aboutus/></>,
      path:'/aboutus'
    },
    {
      element:<><Nav/><Contact/></>,
      path:'/contact'
    }
  ])
  return (
    <>
    <DataVal.Provider value='hehe'>
        <RouterProvider router={router}/>
    </DataVal.Provider>
    </>
  )
}

export default App
