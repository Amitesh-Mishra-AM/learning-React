import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import bgImg from "./assets/bg_img.jpg"

function App() {
  return (
    <>
      <section className="relative w-[100vw] h-[100vh]">
        {/* Background Layer with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[95%]"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>

        <div className="relative z-10">
          <Navbar />
          <Landing />
        </div>
      </section>
    </>
  );
}

export default App
