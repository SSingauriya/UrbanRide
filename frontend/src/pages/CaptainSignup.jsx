import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CapatainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {
  const navigate = useNavigate();


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext);


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    const captainData = {
      fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };
    

    console.log('Payload:', captainData);
    console.log('URL:', `${import.meta.env.VITE_BASE_URL}/captains/register`);

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    
    
    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      console.log(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }
  return (
    <div className="py-5 px-7 flex justify-between flex-col h-screen">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={(e)=>handleSubmit(e)}> 
        <h3 className="text-lg w-full font-medium mb-2">What's our Captain's name</h3>
         <div className="flex gap-4 mb-7 ">
          <input
            required
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
            className="bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg placeholder:text-base"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
            className="bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg placeholder:text-base"
            type="text"
            placeholder="Last Name"
          />

         </div>
          <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
          <input
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 px-4 py-2 w-full rounded text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 px-4 py-2 w-full rounded text-lg placeholder:text-base"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
            type="password"
            placeholder="password"
          />



          <h3 className="text-lg font-medium mb-4">Vehicle Information</h3>
          <div className="flex flex-wrap gap-4">
  <input
    required
    value={vehicleColor}
    onChange={(e) => setVehicleColor(e.target.value)}
    className="bg-[#eeeeee] mb-4 px-4 py-2 w-[45%] sm:w-[48%] rounded text-lg placeholder:text-base"
    type="text"
    placeholder="Vehicle Color"
  />

  <input
    required
    value={vehiclePlate}
    onChange={(e) => setVehiclePlate(e.target.value)}
    className="bg-[#eeeeee] mb-4 px-4 py-2 w-[45%] sm:w-[48%] rounded text-lg placeholder:text-base"
    type="text"
    placeholder="Vehicle Plate"
  />
  
  <input
    required
    value={vehicleCapacity}
    onChange={(e) => setVehicleCapacity(e.target.value)}
    className="bg-[#eeeeee] mb-4 px-4 py-2 w-[45%] sm:w-[48%] rounded text-lg placeholder:text-base"
    type="number"
    placeholder="Vehicle Capacity"
  />
  
  <select
    required
    value={vehicleType}
    onChange={(e) => setVehicleType(e.target.value)}
    className="bg-[#eeeeee] mb-4 px-4 py-2 w-[45%] sm:w-[48%] rounded text-lg placeholder:text-base"
  >
    <option value="">Select Vehicle Type</option>
    <option value="car">car</option>
    <option value="motorcycle">motorcycle</option>
    <option value="auto">auto</option>
  </select>
</div>


          



          <button
            className="bg-[#111] text-white font-semibold mb-7 px-4 py-2 w-full rounded text-lg placeholder:text-base"
            type="submit"
          >
            Create Captain account
          </button>
        </form>
        <p className="text-center">Already have an account? <Link to='/captain-login' className="text-blue-600" text-xl>Login</Link></p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">This site is protected by reCAPTCHA and the <span className='underline'>Google Policy</span> and <span className='underline'>Terms of Service apply</span> 
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;