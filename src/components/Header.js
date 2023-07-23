import React from 'react'
import Style from "../stylesheet modules/header.module.css"

const Header = () => {
  return (
    <>
        <div className={Style.container}>
        
            <div className={Style.logoContainer}>
            </div>
                <img src={require("../img/logo.png")} alt="" className={Style.logo} />
        </div>
    </>
  )
}

export default Header