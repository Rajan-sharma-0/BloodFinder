import React from 'react'
import "./Styles/LearnAbout.css"
import inspirational from "../assets/bloodDonate.png"
export default function LearnAbout() {
  return (
    <div className='learnAbout'>
        <h2>Learn About Donation</h2>
        <div className="learnAboutMain">
            <div className="learnAboutInspiration">
                <img src={inspirational} alt="" />
            </div>
            <div className="learnAboutBloodCategory">
            <table className="learnAboutTable">
            <tbody>
              <tr>
                <th colSpan="3" className="table-header">Compatible Blood Type Donors</th>
              </tr>
              <tr>
                <td><b>Blood Type</b></td>
                <td><b>Donate Blood To</b></td>
                <td><b>Receive Blood From</b></td>
              </tr>
              <tr>
                <td className="blood-type"><b>A+</b></td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr>
                <td className="blood-type"><b>O+</b></td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr>
                <td className="blood-type"><b>B+</b></td>
                <td>B+ AB+</td>
                <td>B+ B- O+ O-</td>
              </tr>
              <tr>
                <td className="blood-type"><b>AB+</b></td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td className="blood-type"><b>A-</b></td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>
              <tr>
                <td className="blood-type"><b>O-</b></td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr>
                <td className="blood-type"><b>B-</b></td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>
              <tr>
                <td className="blood-type"><b>AB-</b></td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>
            </tbody>
          </table>
            </div>
        </div>
    </div>
  )
}
