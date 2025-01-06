import React, { useRef, useState } from 'react'
import {  useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

  
  const [finshRidePanel, setFinshRidePanel] = useState(false)
  const finshRidePanelRef = useRef(null);
  useGSAP(function(){
    if(finshRidePanel){
      gsap.to(finshRidePanelRef.current,
        {transform: 'translateY(0)'}
      )
    }else{
      gsap.to(finshRidePanelRef.current,
        {transform: 'translateY(100%)'}
      )
    }
  },[finshRidePanel]);

  return (
    <div className="h-screen ">
    
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen' >
      <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='' />
      <Link to={'/captain-home'} className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
      <i className="text-lg font-medium ri-logout-box-r-line"></i>
      </Link>
    </div>
    <div className="h-4/5">
      <img
        className="h-full w-full object-cover"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="Background"
      />
    </div>
    <div className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400"
    onClick={()=>{
      setFinshRidePanel(true);
    }}>
    <h5 className='p-1 text-center absolute w-[95%] top-0' onClick={()=>{
      }} ><i className="text-3xl text-gray-800 ri-arrow-up-wide-fill"></i></h5>
        <h4 className='text-xl font-semibold'>4 km away</h4>
        <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
    </div>

    <div ref={finshRidePanelRef} className="fixed w-full h-screen z-10 bg-white bottom-0 translate-y-full pt-12 px-3 py-6">
        <FinishRide setFinshRidePanel = {setFinshRidePanel} />
      </div>

  </div>
  )
}

export default CaptainRiding
