import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import CaptianSingup from './pages/CaptianSingup'
import Captainlogin from './pages/Captainlogin'
import UserSignup from './pages/UserSignup'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/login" element={ <UserLogin/>} />
        <Route path="/signup" element={ <UserSignup/>} />
        <Route path="/captain-login" element={ <Captainlogin/>} />
        <Route path="/captain-signup" element={ <CaptianSingup/>} />
      </Routes>
    </div>
  )
}

export default App
