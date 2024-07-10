
import {useRef, useState, useCallback } from 'react'
import './App.css'
import Child from "./components/Child"


function App() {
  const renderCount = useRef(0);
  console.log("parent render count ", ++renderCount.current);
  const [count, setCount] = useState(0);


  const handleSomething = useCallback(() => {}, []) 
  return (
    <div className="App">
      <Child handleSomething={handleSomething} />
      <button onClick={() => {
        setCount(current => current + 1)
      }}>render</button>
    </div>
  )
}

export default App
