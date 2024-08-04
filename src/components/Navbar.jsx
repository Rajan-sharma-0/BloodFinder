import React from 'react'
import "./Styles/Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbarMain">

        <Link to="/" className='logoImage'>
        <img src="https://img.icons8.com/?size=100&id=LB9jiNoZermj&format=png&color=000000" alt="" />
        </Link>
        <div className="navbarElements">
            <ul>
              
                <Link to="/" className='navbarListElements'><span >Home</span></Link>
                <Link to="/registration" className='navbarListElements'><span >Donate</span></Link>
                <Link to="/bloodfind" className='navbarListElements'><span >Find Blood</span></Link>
                <Link to="/login" className='navbarListElements'><span >Login</span></Link>
                
            </ul>
        </div>
        </div>
    </div>
  )
}
