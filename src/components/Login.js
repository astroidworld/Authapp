import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { auth,provider } from "../Firebase-config";
import Style from "../stylesheet modules/login.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import Loader from "./Loader";


const Login = () => {
  const navigate = useNavigate();  
  const [loader, setloader] = useState(false);

  const [userData, setuserData] = useState({    
    email: "",
    password: "",
  });

  const valueChangeHandler = (event) => {
    setuserData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };



  const loginuser = ( ) =>
  {
    setloader(true);
      signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then(async() => {
          await navigate("/");
      })
      .catch((error) => {
        setloader(false);
          console.log("error code: "+error.Code+" Error-message: "+error.Message);
      })
  }


  const googlesignup = () => {
        setloader(true);
        signInWithPopup(auth, provider)
    .then(async() => {
        await setTimeout(() =>navigate("/") ,4000)
        
    }).catch((error) => {    
        setloader(false);
    });  

    }


  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(userData);

    if (!userData.password || !userData.email) {
        toast.error('Please fill all fields', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,               
            theme: "light",
            });
            return;
    }


    loginuser();

    setuserData({      
      email: "",
      password: "",
    });
  };


//   useEffect(()=>{
//     setloader(true);
//     setTimeout(() => setloader(false),3000)
//   },[])

  return (
    <div className={Style.body}>
      <Loader loader={loader}/>
      <div className={Style.fullContainer}>
        <div className={Style.leftSideSection}></div>

        <div className={Style.signupContainer}>
          <Link to="/" className={Style.linkarrow}>
            <BsFillArrowLeftCircleFill className={Style.homeArrow} />
          </Link>

          <h1 className={Style.heading}>Welcome Back, Login</h1>

          <form onSubmit={submitHandler} className={Style.from}>

            <input
              type="email"
              id="email"
              name="email"
              onChange={valueChangeHandler}
              value={userData.email}
              placeholder="Enter your Email"
              className={Style.input}
            />

            <input
              type="password"
              id="password"
              name="password"
              onChange={valueChangeHandler}
              value={userData.password}
              placeholder="Enter your Password"
              className={Style.input}
            />


            <button type="submit" className={Style.button}>
              Login now
            </button>
          </form>

          <Link to="/signup" className={Style.loginLink}>
            <p>Don't have an account? Signup now</p>
          </Link>

          <p className={Style.or}>or,</p>

          <div className={Style.socialIcons} onClick={googlesignup}>
          <FcGoogle className={Style.socialIcon} />          
          <div className={Style.icontext}>Continue with Google</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;




