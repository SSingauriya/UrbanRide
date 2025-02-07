import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to={'/home'} className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full">
      <i className="text-lg font-medium right-2 top-2 ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-16"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Saurbh</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki S-Presso LXI</p>
            <p>4.9</p>
          </div>
        </div>

        <div className="flex gap-2 flex-col justify-between items-center">
        
          <div className="w-full mt-5"> 
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium">Third Wave Coffee</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout,
                  Bengaluru, Karnatak
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
        </div>
        <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg' >Make payment</button>
      </div>
    </div>
  );
};

export default Riding;
