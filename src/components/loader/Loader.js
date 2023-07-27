import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import Style from "./loader.module.css";

const Loader = ({loader}) => {
  return (    
        <div className={loader?Style.loaderon:Style.loaderoff}>
        <HashLoader color="#8605ff" size={100}/>
        </div>    
  )
}

export default Loader;