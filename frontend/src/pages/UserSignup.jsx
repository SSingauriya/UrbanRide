import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);   
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);


    if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className="p-7 flex justify-between flex-col h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={(e)=>handleSubmit(e)}> 
        <h3 className="text-lg w-1/2 font-medium mb-2">What's your name</h3>
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
          
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="bg-[#eeeeee] mb-5 px-4 py-2 w-full rounded text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 px-4 py-2 w-full rounded text-lg placeholder:text-base"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
            type="password"
            placeholder="password"
          />
        
          <button
            className="bg-[#111] text-white font-semibold mb-5 px-4 py-2 w-full rounded text-lg placeholder:text-base"
            type="submit"
          >
            Create account
          </button>
        </form>
        <p className="text-center">Already have an account? <Link to='/login' className="text-blue-600" text-xl>Login</Link></p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  );
};

export default UserSignup;