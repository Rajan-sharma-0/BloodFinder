import React, { useEffect, useState } from 'react'
import './Styles/DonorsRegistered.css'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../Firebase'
export default function DonorsRegistered() {
  const [donors, setDonors] = useState(0)
  useEffect(() => {
    const getNumberOfDonors = async()=>{
      try {
        const docRef = collection(db, 'donors')
        const querySnapshot = await getDocs(docRef)
        
      const totalDonors = querySnapshot.size;
      setDonors(totalDonors)
      console.log("no of donors ",totalDonors)
        return totalDonors;
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    }
  
    return () => {
     getNumberOfDonors();
      // setDonors(finalDonors)
    }
  }, [])
  
  return (
    <div className='donorsRegistered'>
        <div className="donorsRegisteredContainer">
          <span>{donors}</span>
          <span>Donors Registered</span>
        </div>
    </div>
  )
}
