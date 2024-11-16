import React from "react";
import { useState } from 'react'
function Buttons() {
    let [color, setColor] = useState("black");
    React.useEffect(()=>{
        document.body.style.background=color;
    },[color]);
    return (
        <div className='bg-cyan-700  flex  px-4 py-2 rounded-[50px] w-full justify-around'>
            <button className='bg-red-700 p-2 rounded-[15px] w-[5rem] text-center' onClick={() => {setColor("#b91c1c")}}>Red</button>
            <button className="bg-green-700 p-2 rounded-[15px] w-[5rem] text-center" onClick={()=>{setColor("Green")}} >Green</button>
            <button className="bg-blue-700 p-2 rounded-[15px] w-[5rem] text-center" onClick={()=>{setColor("Blue")}}>Blue</button>
            <button className="bg-[#808000] p-2 rounded-[15px] w-[5rem] text-center" onClick={()=>{setColor("Olive")}}>Olive</button>
            <button className="bg-gray-700 p-2 rounded-[15px] w-[5rem] text-center" onClick={()=>{setColor("Gray")}}>Gray</button>
            <button className="bg-pink-300 p-2 rounded-[15px] w-[5rem] text-center" onClick={()=>{setColor("pink")}}>Pink</button>
            <button className="bg-yellow-300 p-2 rounded-[15px]  w-[5rem] text-center" onClick={()=>{setColor("Yellow")}}>Yellow</button>
            <button className="bg-purple-700 p-2 rounded-[15px] w-[5rem] text-center" onClick={()=>{setColor("Purple")}}>Purple</button>
            <button className="bg-[#B2A4D4] p-2 rounded-[15px] w-[5rem] text-center" onClick={()=>{setColor("#B2A4D4")}}>Lavender</button>
            <button className="bg-white p-2 rounded-[15px] w-[5rem] text-center" onClick={()=>{setColor("White")}}>White</button>
            <button className="bg-black text-white p-2 rounded-[15px] w-[5rem] text-center" onClick={()=>{setColor("black")}}>Black</button>
        </div>
    )
}

export default Buttons;