import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../Firebase-config';
import { deleteUser } from "firebase/auth";



const Home = () => {

    const user = auth.currentUser;
    const [username, setusername] = useState("");
    const signoutHandler = () => {        
        signOut(auth).then(() => {
        console.log("Sign out successfull");
    }).catch((error) => {
        // An error happened.
        console.log("An error happened");
        });
    }

    const deleteacHandler = () => {
        // const user = auth.currentUser;

        deleteUser(user).then(() => {
        // User deleted.
        console.log("User deleted.");
    }).catch((error) => {
        // An error ocurred
        console.log("An error ocurred." + error.message);
        // ...
        });
    }

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user)
            {
                setusername(user.displayName)
            }
            else
                setusername("")
        })

    })
  return (
    
    <>
    <h1>Home</h1>
    
    {
        username ?<h1>Welcome {username}</h1>:<h1>Log in please...</h1>
    }
    {
        !username?
        <>
        <Link to="login">
        <button>Login</button>
        </Link>
        <Link to="signup">
            <button>Signup</button>
        </Link>
        </>
        : 
        <>
        <button onClick={signoutHandler}>Logout</button>
        <button onClick={deleteacHandler}>Delete account</button>
        </>          
        
    }



    </>
  )
}

export default Home