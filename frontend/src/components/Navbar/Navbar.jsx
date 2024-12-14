import React from 'react'
import  './Navbar.css'
import { useState } from 'react';
import {assets} from '../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({onShowLogin, showLogin}) => {
  const [menu, setMenu] = useState("home");
  
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className='logo'/>
      <ul className='navbar-menu'>
        <li className={menu === "home" && "active"} onClick={() => setMenu("home")}>Home</li>
        <li className={menu === "menu" && "active"} onClick={() => setMenu("menu")}>Menu</li>
        <li className={menu === "mobile" && "active"} onClick={() => setMenu("mobile")}>Mobile</li>
        <li className={menu === "contact" && "active"} onClick={() => setMenu("contact")}>Contact</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className='dot'></div>
        </div>
        <button onClick={() => onShowLogin(!showLogin)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar;