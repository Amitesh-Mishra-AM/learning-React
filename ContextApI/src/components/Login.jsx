import React, {useState, useContext } from "react";
import userContext from "../Context/userContext";

function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const {setUser}=useContext(userContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});
    }
    return(
        <div>
            <h2>Login</h2>
            <input
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="User Name"/>
            <br />
            <br />
            <input
            type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"/>
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <br />
            <br />
        </div>
    )
}

export default Login;