import { useState } from 'react'
import TodoWrapper from './Components/todoWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TodoWrapper/>
    </>
  )
}

export default App
