import React from 'react'
import "./Styles/Landing.css"
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <div className='landing'>
        <div className="landingButtons">
            <Link to="/registration"><button>Donate Blood</button></Link>
            <span>OR</span>
            <Link to="/bloodfind"><button>Find Blood</button></Link>
        </div>
        <div className="landingText">
            <span>Find the blood you need</span>
            <span>All across India</span>
        </div>
    </div>
  )
}
