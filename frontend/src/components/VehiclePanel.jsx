import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 onClick={()=>{
        props.setVechilePanalOpen(false);
      }} 
      className='p-1 text-center absolute w-[93%] top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className = "text-2xl font-semibold mb-5" >Choose a Vechile</h3>
        
        <div onClick={()=>{
          props.setConfirmRidePanal(true);
          props.setVechilePanalOpen(false);
        }} className="flex w-full p-3 mb-2 border-2 active:border-black rounded-xl items-center justify-between">
          <img 
            className="h-12" 
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" 
            alt="Uber Logo" 
          />
          <div className="w-1/2 -ml-2">
            <h4 className="font-medium text-base">
              UberGo 
              <span><i className="ri-user-line"></i> 4</span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-sm text-gray-600">Affordable, Compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">$20.2</h2>
        </div>
        
        <div onClick={()=>{
          props.setConfirmRidePanal(true);
          props.setVechilePanalOpen(false);
        }} className="flex w-full p-3 mb-2 border-2 active:border-black rounded-xl items-center justify-between">
          <img 
            className="h-12" 
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" 
            alt="Uber Logo" 
          />
          <div className="w-1/2 -ml-2">
            <h4 className="font-medium text-base">
              Moto 
              <span><i className="ri-user-line"></i>1</span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-sm text-gray-600">Affordable MotorCycle ride</p>
          </div>
          <h2 className="text-lg font-semibold">$5.2</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanal(true);
          props.setVechilePanalOpen(false);
        }} className="flex w-full p-3 mb-2 border-2 active:border-black rounded-xl items-center justify-between">
          <img 
            className="h-12" 
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" 
            alt="Uber Logo" 
          />
          <div className="w-1/2 -ml-2">
            <h4 className="font-medium text-base">
              UberAuto
              <span><i className="ri-user-line"></i>3</span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-sm text-gray-600">Affordable, auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">$10.2</h2>
        </div>

    </div>
  )
}

export default VehiclePanel
