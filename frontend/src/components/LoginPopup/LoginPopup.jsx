import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
  // Login or register
  const [formMode, setFormMode] = useState("login");
  let otherMode = formMode === "login" ? "register" : "login";
  return (
    <div className='login-container'>
        <form className='login-form'>
          <div className="form-header">
            <h3>{formMode}</h3>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="form-input">
            { formMode === "register" && 
             <input placeholder='Your name'></input>
            }
            <input placeholder='Your email'></input>
            <input placeholder='Password'></input>
          </div>
          <div className="form-button">
            <button>{formMode === "login" ? "Login" : "Create account"}</button>
          </div>
          <div className="policy">
            <input id='che' type='checkbox'></input>
            <label htmlFor='che'>By contuning, i agree to the terms of use & privacy policy</label>
          </div>
          <div className='change-form'>
              <p>Already have an account? <span className='change-form-btn' onClick={() => setFormMode(otherMode)}>{formMode === "login" ? "Register" : "Login"} here</span></p>
          </div>
        </form>
    </div>
  )
}

export default LoginPopup