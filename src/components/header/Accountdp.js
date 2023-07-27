import React, { useEffect, useState } from 'react'
import Userpopup from './Userpopup'
import Style from "./accountdp.module.css"

const Accountdp = ({user}) => {
const [clicked, setclicked] = useState(false)

const dpClickHandler = () => {
      clicked?setclicked(false):setclicked(true);
      console.log(user);
}

useEffect(() => {
  


}, [clicked])


  return (
    <div className={Style.dpContainer}>
        <img src={user.photoURL?user.photoURL:require("../../img/dpimg.png")} title={user.displayName} alt="" className={Style.dpPhoto} onClick={dpClickHandler}/>

        <Userpopup user={user} clicked={clicked} setclicked={setclicked}/>

    </div>
  )
}

export default Accountdp