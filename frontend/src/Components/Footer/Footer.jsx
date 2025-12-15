import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className="footer_Logo">
        <img src={footer_logo} alt="" />
        <p>ShopyStyle</p> 
      </div>
      <ul className="footer_Links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_Social_Icon">
        <div className="footer_Icons_Container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer_Icons_Container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer_Icons_Container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>

        <div className="footer_Copyright">
            <hr />
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>

    </div>
    </>
  )
}

export default Footer
