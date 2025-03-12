import React from "react";
import myimg from "../assets/my-img.png"

function Landing(){
    return(
        <>
            <div className={` flex gap-[5rem] justify-around`} >
                <div className="img-section flex justify-center w-[55vw]">
                    <img className="flex justify-center border-black border-[15px] rounded-[100%]" src={myimg} alt="img" /> 
                </div>
                <div className="flex flex-col  justify-center">
                    <div className="intro-section text-white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel aut, temporibus in libero commodi laboriosam debitis voluptates odio saepe enim porro qui dolores magni magnam placeat unde repudiandae maxime quos consectetur repellat, nostrum illum? Placeat ab laborum eum temporibus quisquam culpa perspiciatis, ipsum, cum doloribus laboriosam labore ad quo asperiores perferendis, quam earum ipsa qui animi voluptate.
                    </div>
                    <div className=" flex justify-center mt-5 cursor-pointer">
                        <button className="cursor-pointer border-[#0d1115] border-4 px-[2rem] text-white py-[1rem] bg-[#181a1d]">Resume Download</button>
                    </div>
                </div>
            </div>
        </>
    )
}   
export default Landing