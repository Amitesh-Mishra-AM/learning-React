
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(){   
    const data = useLoaderData() 
    // const [data,setData]=useState([]);
    // const [following,setFollowing]=useState();
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/Amitesh-Mishra-Am`)
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setData(data);
    //     })
    // },[])

    // optimization using react loader, cause fetching may take time,  so we use loader which starts fetching when we hover on the button and keeps it in cache
    // so no need of useEffect just use loader in the main.jsx
    return(
        <>
            <div className="flex items-center justify-evenly">
                <img src={data.avatar_url} className="rounded-[50%]" alt="Github Img" />
                <div className="bg-gray-600 p-4 rounded-[25px]">
                    <div className=" text-white text-3xl p-2 text-center">Github Followers: {data.followers} </div>
                    <div className=" text-white text-3xl p-2 text-center">Github Following: {data.following}</div>
                </div>
            </div>
            
        </>
    )
}

export default Github;

//  export here eor make a new file
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Amitesh-Mishra-Am')
    return response.json()
}
