import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import {  useGSAP } from '@gsap/react'
import gsap from 'gsap';

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePanal, setConfirmRidePanal] = useState(false)

  const confirmRidePanalRef = useState(null);
  const ridePopupPanelRef = useRef(null);
  
  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,
        {transform: 'translateY(0)'}
      )
    }else{
      gsap.to(ridePopupPanelRef.current,
        {transform: 'translateY(100%)'}
      )
    }
  },[ridePopupPanel]);

  useGSAP(function(){
    if(confirmRidePanal){
      gsap.to(confirmRidePanalRef.current,
        {transform: 'translateY(0)'}
      )
    }else{
      gsap.to(confirmRidePanalRef.current,
        {transform: 'translateY(100%)'}
      )
    }
  },[confirmRidePanal]);



  return (
    <div className="h-screen">
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen' >
      <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='' />
      <Link to={'/home'} className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
      <i className="text-lg font-medium ri-logout-box-r-line"></i>
      </Link>
    </div>
    <div className="h-3/5">
      <img
        className="h-full w-full object-cover"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="Background"
      />
    </div>
    <div className="h-2/5 p-6">
    <CaptainDetails/>
    </div>

    <div ref={ridePopupPanelRef} className="fixed w-full z-10 bg-white bottom-0 translate-y-full pt-12 px-3 py-6">
        <RidePopUp setRidePopupPanel = {setRidePopupPanel} setConfirmRidePanal = {setConfirmRidePanal}  />
    </div>

    <div ref={confirmRidePanalRef} className="fixed w-full h-screen z-10 bg-white bottom-0 translate-y-full pt-12 px-3 py-6">
        <ConfirmRidePopUp setRidePopupPanel = {setRidePopupPanel} setConfirmRidePanal = {setConfirmRidePanal}  />
    </div>

  </div>
  )
}

export default CaptainHome
