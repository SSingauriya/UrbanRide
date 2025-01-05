import React from 'react'

const LocationSearchPanel = (props) => {

  const location = [
    "4B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22B, Near Malotra's cafe, Code Help, Delhi",
    "20B, Near Singal's cafe, Sheryians Coding School, U.S.",
     "1BA, Near Sharma's cafe, Sheryians Coding School, Bhopal",
  ]

  return (
    <div>

      {
        location.map(function (location,idx) {
          return (
            <div key = {idx} onClick={()=>{
              props.setVechilePanalOpen (true);
              props.setPanelOpen(false);
            }}
              className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
              <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-line"></i></h2>
              <h4 className='font-medium' >
                {location}
              </h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default LocationSearchPanel
