import React from "react";

function Navbar(){
    return(
        <>
            <div className="flex gap-[10rem] justify-center  text-white">
                <button>Home</button>
                <button>About</button>
                <button>Projects</button>
                <button>Contact Me</button>
            </div>
        </>
    )
}

export default Navbar