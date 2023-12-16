import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginform from './Loginform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Loginform/>
      <h1>Hallo</h1>
    </>
  )
}

export default App
