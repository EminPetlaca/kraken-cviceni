import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prvni from './pages/Prvni'
import Druhy from './pages/Druhy'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Prvni></Prvni>
   <Druhy/>
   </>
  )
}

export default App
