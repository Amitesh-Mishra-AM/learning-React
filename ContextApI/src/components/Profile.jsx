import React, {useContext} from 'react';
import userContext from '../Context/userContext';

function Profile(){
    const {user}=useContext(userContext)
    if(!user) return <div>Please Login</div>
    return(
        <>
            <h3>Welcome {user.username} !!!</h3>
            <h3>Your password is {user.password} !!! </h3>
        </>
    )
}
export default Profile;

