import React, { useContext } from 'react'
import { DonorContext } from '../DonorContext'
import './Styles/BloodDonors.css'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'
export default function BloodDonors() {
    const {donors} = useContext(DonorContext)
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/registration")
    }
    const handleBackClick = ()=>{
        navigate("/bloodfind")
    }
    // console.log("donrs ", donors)
  return (
    <div className='bloodDonors'>
      <Navbar/>
        <div className="bloodDonorsMain">
            <div className="bloodDonorsFind" onClick={handleBackClick}>
                <span>Find Blood</span>
            </div>
            <div>

        <h1>Blood Donors</h1>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Age</th>
            <th>Contact no.</th>
            <th>District</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.blood}</td>
              <td>{donor.age}</td>
              <td>{donor.contact}</td>
              <td>{donor.district}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="bloodDonorsBecome" onClick={handleClick}>
        <h2>Become a Donor</h2>
        <img src="https://img.icons8.com/?size=100&id=y6ScRoy1ZTFC&format=png&color=000000" alt="Blood" />
        <span>Register as a Voluntary Blood Donor</span>
      </div>
      </div>
    </div>
  )
}
