import { useState } from 'react'
import Name from './components/Name'

function App() {
  const [count, setCount] = useState(0)
  console.log('Parent render');
  const increaseCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
      <button onClick={increaseCount}>Count {count}</button>
      <Name />
    </>
  )
}

export default App
