import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut incidunt quisquam obcaecati reiciendis voluptate omnis voluptas, accusamus culpa voluptates molestiae, optio placeat possimus assumenda numquam. Recusandae fuga aut voluptatem?</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-333-444</li>
                    <li>contact@tomato.co</li>
                </ul>
            </div>
        </div>
        <hr></hr>
        <p className='copyright'>Copyright 2024 @ tomato.com - All right reserved</p>
    </div>
  )
}

export default Footer