import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  let [Password,setPassword]=useState("");
  let [length,setLength]=useState(8);
  let [isnumber,setNumber]=useState(false);
  let [ischar,setChar]=useState(false);
  const passwordRef=useRef(null)
  let Generate_pass=useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isnumber) str += "0123456789"
    if (ischar) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)
  }, [length, isnumber, ischar, setPassword]);

  useEffect(() => {
    Generate_pass()
  }, [length, isnumber, ischar, Generate_pass])

  let copyPass=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(Password);
  },[Password])
  return (
    <>
    <div className='Main flex flex-col'>
        <p className='text-center text-cyan-300 text-[2.6rem] font-serif'>Password Generator</p>
        <div className="input m-auto my-[2rem] w-[40%] h-[2.5rem] flex">
          <input className='w-[100%] h-[100%] rounded-md p-2' type="text" placeholder='Password' value={Password} readOnly ref={passwordRef}  />
          <button className='bg-orange-500 rounded-md w-[5rem] cursor-pointer font-sans font-[2rem] hover:bg-orange-400' onClick={copyPass} >Copy</button>
        </div>
        <div className="otherElemen m-auto flex">
          <input className='cursor-pointer ' type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <label className='text-white px-2' htmlFor="length">length: {length}</label>
          <input className='cursor-pointer' type="checkbox" defaultChecked={isnumber} onChange={()=>{setNumber(prev=>!prev)}} name="number" id="number" /> <label className='cursor-pointer text-white px-2' htmlFor="number">Number</label>
          <input className='cursor-pointer' type="checkbox" defaultChecked={ischar} onChange={()=>{setChar((prev)=>!prev)}} name="character" id="character" /> <label className='cursor-pointer text-white px-2' htmlFor="character">Character</label>
        </div>
    </div>
    </>
  )
}

export default App
