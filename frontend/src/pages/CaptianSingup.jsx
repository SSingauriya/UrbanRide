import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptianSingup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setCaptainData({
      fullname:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
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
          <button
            className="bg-[#111] text-white font-semibold mb-7 px-4 py-2 w-full rounded text-lg placeholder:text-base"
            type="submit"
          >
            Sign Up
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

export default CaptianSingup;
