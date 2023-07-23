import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile,signInWithPopup } from "firebase/auth";
import { auth,provider } from "../Firebase-config";
import Style from "../stylesheet modules/signup.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import Loader from "./Loader";


const Signup = () => {
  const navigate = useNavigate();
  const [confirmpass, setconfirmpass] = useState("");
  const [confirmpasserr, setconfirmpasserr] = useState(false);
  const [loader, setloader] = useState(false);

  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const valueChangeHandler = (event) => {
    setuserData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const confirmpasswordChangeHandler = (event) => {
    setconfirmpass(event.target.value);
    console.log(confirmpass);
  };

  const registeruser = () => {
    setloader(true);
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: userData.username,
        });
        console.log(userCredential);
        await navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "error code: " + errorCode + " Error-message: " + errorMessage
        );
        // ..
      });
  };


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

    if (!userData.password || !userData.username || !userData.email) {
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
    else if (!(confirmpass === userData.password))
        return;

    registeruser();

    setuserData({
      username: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (confirmpass === userData.password || confirmpass === "") {
      setconfirmpasserr(false);

    } else setconfirmpasserr(true);
  }, [confirmpass, userData.password]);

  // useEffect(()=>{
  //   setloader(true);
  //   setTimeout(() => setloader(false),3000)
  // },[])

  return (
    <div className={Style.body}>
      <Loader loader={loader}/>
      <div className={Style.fullContainer}>
        <div className={Style.leftSideSection}></div>

        <div className={Style.signupContainer}>
          <Link to="/" className={Style.linkarrow}>
            <BsFillArrowLeftCircleFill className={Style.homeArrow} />
          </Link>

          <h1 className={Style.heading}>Create an account</h1>

          <form onSubmit={submitHandler} className={Style.from}>
            <input
              type="text"
              id="username"
              name="username"
              onChange={valueChangeHandler}
              value={userData.username}
              placeholder="Enter your name"
              className={Style.input}
            />

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

            <div className={Style.confrimPassSec}>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                onChange={confirmpasswordChangeHandler}
                value={confirmpass}
                placeholder="Confirm your Password"
                className={Style.input}
              />
              {confirmpasserr ? (
                <div className={Style.errorpass}>Password doesn't match</div>
              ) : (
                <div className={Style.errornotpass}>Password doesn't match</div>
              )}
            </div>

            <button type="submit" className={Style.button}>
              Create an account
            </button>
          </form>

          <Link to="/login" className={Style.loginLink}>
            <p>Already, have an account? Login now</p>
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

export default Signup;
