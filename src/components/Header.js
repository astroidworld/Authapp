import React from 'react'
import Style from "../stylesheet modules/header.module.css"
import LoginSignup from './LoginSignup'
import Accountdp from './Accountdp'


const Header = ({user}) => {

  return (
    <>
        <div className={Style.container}>
        
            <div className={Style.logoContainer}>
                <img src={require("../img/logo.png")} alt="" className={Style.logo} />
            </div>

            {user?<Accountdp user={user}/>:<LoginSignup/>}
        </div>
    </>
  )
}

export default Header