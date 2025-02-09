import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Landing></Landing>
    </>
  )
}

export default App
