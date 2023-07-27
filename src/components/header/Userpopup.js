import React from 'react'
import Style from './userpopup.module.css'
import { MdAccountBox } from 'react-icons/md';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { AiFillSetting,AiFillDelete } from 'react-icons/ai';
import { BiLogOutCircle } from 'react-icons/bi';
import { auth } from '../../Firebase-config';
import { deleteUser, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Userpopup = ({user,clicked,setclicked}) => {

  const navigate = useNavigate(); 

  const logoutHandler = () => {        
    signOut(auth).then(() => {
    console.log("Sign out successfull");
    setclicked(false);
    navigate("/");
}).catch((error) => {    
    console.log("An error happened"+error.message);
    setclicked(false);
    });
}

  const deleteacHandler = () => {
    deleteUser(user).then(() => {
    console.log("User deleted.");
    setclicked(false);
    navigate("/");
}).catch((error) => {    
    console.log("An error ocurred." + error.message); 
    setclicked(false); 
    });
}

  return (
    <div className={clicked?Style.containeron:Style.containeroff}>
      <div className={Style.triangle}></div>
      <div className={Style.name}>Hello, {user.displayName}</div>
      <div className={Style.optionContainer}>
        <div className={Style.option}><MdAccountBox className={Style.icon}/> Account</div>
        <div className={Style.option}><BsFillFileEarmarkCodeFill className={Style.icon}/> My codes</div>
        <div className={Style.option}><AiFillSetting className={Style.icon}/> Settings</div>
        <div className={Style.option} onClick={logoutHandler}><BiLogOutCircle className={Style.icon}/> Log out</div>
        <div className={Style.optionred} onClick={deleteacHandler}><AiFillDelete className={Style.icon} /> Delete Account</div>
      </div>
    </div>
  )
}

export default Userpopup