import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <h2>For Better Expreince Download <br/>Tomato App</h2>
        <div className='mobile-app'>
             <img src={assets.app_store} alt="" />
             <img src={assets.play_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload