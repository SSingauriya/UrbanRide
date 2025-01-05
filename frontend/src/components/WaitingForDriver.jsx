import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center absolute w-[93%] top-0' onClick={()=>{
      
    }} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>

    <div className='flex items-center justify-between'>
      <img className='h-12' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png'/>
      <div className='text-right'>
        <h2 className='text-lg font-medium'>Saurbh</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
        <p className='text-sm text-gray-600'>Maruti Suzuki S-Presso LXI</p>
        <p>4.9</p>
      </div>
    </div>

    <div  className='flex gap-2 flex-col justify-between items-center'>
      <img className='h-20' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png'/>
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className=" text-lg ri-map-pin-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Uttar Pradesh</p>
          </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className="text-lg ri-map-pin-user-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>Third Wave Coffee</h3>
            <p className='text-sm -mt-1 text-gray-600'>17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnatak</p>
          </div>
        </div>
        <div className='flex items-center gap-5 p-3'>
        <i className="text-lg ri-currency-line"></i>
          <div>
            <h3 className='text-lg font-medium'>$20.2</h3>
            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
          </div>
        </div>

      </div>
    </div>
    
  </div>
  )
}

export default WaitingForDriver
