import React from 'react'
import Style from "../stylesheet modules/accountdp.module.css"

const Accountdp = ({user}) => {
  return (
    <div className={Style.dpContainer}>
        <img src={user.photoURL?user.photoURL:require("../img/dpimg.png")} title={user.displayName} alt="" className={Style.dpPhoto}/>

    </div>
  )
}

export default Accountdp