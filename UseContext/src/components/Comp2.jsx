import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/context'

const Comp2 = () => {
    const val=useContext(CounterContext)
  return (
    <div>{`The Val of counter is ${val}`}</div>
  )
}

export default Comp2