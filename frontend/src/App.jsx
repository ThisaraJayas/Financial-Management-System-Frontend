import { useState } from 'react'
import './App.css'
import RoutesPath from './routes/RoutesPath'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RoutesPath/>
    </>
  )
}

export default App
