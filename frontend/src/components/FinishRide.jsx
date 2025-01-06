import React from "react";
import { Link } from "react-router-dom";
const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute w-[93%] top-0"
        onClick={() => {
          props.setFinshRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h3>

      <div className="flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-10 rounded-full object-cover"
            src="https://i.dailymail.co.uk/i/pix/2013/08/29/article-2405475-1B8389EE000005DC-718_634x550.jpg"
          />
          <h2 className="text-xl font-medium">Abhay Singh</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2km</h5>
      </div>

      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Uttar Pradesh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Third Wave Coffee</h3>
              <p className="text-sm -mt-1 text-gray-600">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karnatak
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$20.2</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">   
          
            <Link
              to={"/captain-home"}
              className="w-full mt-5 flex justify-center text-lg bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Finish Ride
            </Link>
            <p className='mt-10 text-xm'>click on finish ride button if you have completed the payment</p>
        </div>
      </div>
      
    </div>
  )
}

export default FinishRide
