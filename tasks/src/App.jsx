import { useState } from 'react'
import './App.css'
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
