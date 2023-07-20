import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase-config';

const Login = () => {

        const navigate = useNavigate();
        const [userData, setuserData] = useState({            
            email : "",
            password : ""
        });
    
        const valueChangeHandler = (event) =>{
            setuserData((prev)=>{
                return ({...prev,[event.target.name]:event.target.value})
            })        
        }


        const loginuser = ( ) =>
        {
            signInWithEmailAndPassword(auth, userData.email, userData.password)
            .then(async() => {
                // Signed in 
                
                // await updateProfile(user,{
                //     displayName: userData.username
                // });
                // console.log(userCredential);
                await navigate("/");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error code: "+errorCode+" Error-message: "+errorMessage);
                // ..
            })
        }



    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(userData);
        loginuser();

        setuserData({
            username : "",
            email : "",
            password : ""
        })
    }

  return (
    <>
        <h1>Login</h1> 

        <form onSubmit={submitHandler}>

        <label htmlFor="email">email</label>
       <input type="email" id='email' name='email' onChange={valueChangeHandler} value={userData.email}/>

       <label htmlFor="password">password</label>
       <input type="password" id='password' name='password' onChange={valueChangeHandler} value={userData.password}/>

        <button type="submit">Submit</button>

        </form>

        <br />
        <Link to="/">
            <button>Home</button>
        </Link>
        <Link to="/signup">
         <button>Signup</button>
        </Link>

    </>
  )
}

export default Login;