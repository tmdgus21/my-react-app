import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import naverLogo from './assets/naverLogo.jpeg'
import './App.css'
import Login from './Login.jsx'
import Header from './Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Login/>
    </>
  )
}

export default App
