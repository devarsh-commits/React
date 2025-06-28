import React, { useContext } from 'react'
import { DataVal } from '../context/Homedt'

const Home = () => {
    const data=useContext(DataVal)
  return (
    <div>{data}</div>
  )
}

export default Home