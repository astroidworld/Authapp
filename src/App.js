import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import "./globalStyle.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>        
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        {/* <Route path="*" element={<NoPage />} /> */}
      
    </Routes>
  </BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </>
  )
}

export default App