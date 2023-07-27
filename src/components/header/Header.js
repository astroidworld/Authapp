import React, { useEffect, useState } from 'react'
import Accountdp from './Accountdp'
import Style from "./header.module.css"
import { auth } from '../../Firebase-config'


const Header = () => {    

  const [user, setuser] = useState(null)

  useEffect(()=>{
        
    auth.onAuthStateChanged((user)=>{
        if(user)
        {
            // setusername(user.displayName)
            setuser(auth.currentUser);
        }
        else
        setuser(null)
    })

})
  return (
    <>
        <div className={Style.container}>
        
            <div className={Style.logoContainer}>
                <img src={require("../../img/logo.png")} alt="" className={Style.logo} />
            </div>

            {user?<Accountdp user={user}/>:<div>Hello</div>}
        </div>
    </>
  )
}

export default Header