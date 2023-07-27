import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase-config';
import Header from '../header/Header';



const Home = () => {

    
    const [user, setuser] = useState(null)
    const [username, setusername] = useState("");
    
    useEffect(()=>{
        
        auth.onAuthStateChanged((user)=>{
            if(user)
            {
                setusername(user.displayName)
                setuser(auth.currentUser);
            }
            else
                setusername("")
        })

    })

    
  return (
    
    <>
    <Header user={user}></Header>    
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
       <> </>
        
    }



    </>
  )
}

export default Home