import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration'
import Signup from './components/Signup'
import BloodFind from './components/BloodFind'
import Login from './components/Login'
import { UserProvider } from './UserContext'
import { DonorProvider } from './DonorContext'
import BloodDonors from './components/BloodDonors'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

function App() {

  return (
    <UserProvider>
      <DonorProvider>
   <div className='appMain'>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/bloodfind" element={<BloodFind />} />
        <Route path="/donorlist" element={<BloodDonors/>} />
      </Routes>
    </BrowserRouter>
   </div>
   </DonorProvider>
   </UserProvider>
  )
}

export default App
