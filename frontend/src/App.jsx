import { useState } from 'react'
import './App.css'
import RoutesPath from './routes/RoutesPath'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RoutesPath/>
    </>
  )
}

export default App
