import React from 'react'
import './Styles/Homepage.css'
import Navbar from './Navbar'
import Landing from './Landing'
import DonorsRegistered from './DonorsRegistered'
import LearnAbout from './LearnAbout'
import Benefits from './Benefits'
import Footer from './Footer'
export default function Homepage() {
  return (
    <div className='homepage'>
    <Navbar/>

       <Landing/>
       <DonorsRegistered/>
       <LearnAbout/>
       <Benefits/>
       <Footer/>
    </div>
  )
}
