import { useEffect } from 'react'
import './App.css'
import { useCounterStore } from './store'


const logCount = () => {
  const count = useCounterStore.getState().count
  console.log('count '+count)
}

const setCount = () => {
  const count = useCounterStore.setState({count: 20})
  console.log('count '+count)
}

function App() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.incrementAsync)
  const decrement = useCounterStore((state) => state.decrement)

  useEffect(() => {
    logCount()
    //setCount()
  }, [count])


  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={() => {
        setCount()
      }}>setCount</button>
    </>
  )
}

export default App
