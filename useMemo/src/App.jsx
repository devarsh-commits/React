import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const num = new Array(30_000_00).fill(0).map((_, i) => {
    return {
      index: i,
      isMagical: i === 28_000_00
    }
  })
  const [count, setCount] = useState(0)
  const [arr, setarr] = useState(num);
  let magic = useMemo(() => arr.find((item) => item.isMagical === true), [arr])
  // console.log(magic.index)
  return (
    <>
      <div>
        <span>the magical number{magic.index}</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          count===10&&setarr(new Array(90000).fill(0).map((_, i) => {
            return {
              index: i,
              isMagical: i === 9000
            }
          }))
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
