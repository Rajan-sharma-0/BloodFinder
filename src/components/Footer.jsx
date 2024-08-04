import React from 'react'
import "./Styles/Footer.css"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <Link to="/" className='footerLinks'><span>Home</span></Link>
          <Link to="/registration" className='footerLinks'><span>Donate Blood</span></Link>
          <Link to="bloodfind" className='footerLinks'><span>Search for Blood</span></Link>
        </ul>
      </div>
     
  </footer>
  )
}
