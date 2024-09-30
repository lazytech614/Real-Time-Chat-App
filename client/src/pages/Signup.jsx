import React, { useState } from 'react';
import Checkbox from '../components/Dropdown/Checkbox';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    gender: "",
    password: "",
    confirmPassword: ""
  });

  const { signup, isLoading } = useSignup(); // Using the hook here

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setGender = (selectedGender) => {
    setFormData((prevState) => ({
      ...prevState,
      gender: selectedGender,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData); // Call the signup function returned by the hook
  };

  return (
    <div className='w-[30vw] flex flex-col items-center justify-center mx-auto'>
      <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 p-4 text-gray-300'>
        <h1 className='text-3xl text-center font-semibold'>Signup</h1>
        <form onSubmit={handleSubmit} className='my-4'>
          <div>
            <label htmlFor="fullname" className='label p-2'>
              <span className='text-base label-text text-gray-300'>Fullname</span>
            </label>
            <input 
              id='fullname' 
              type="text" 
              className='input input-bordered w-full h-10' 
              placeholder='Enter fullname'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="username" className='label p-2'>
              <span className='text-base label-text text-gray-300'>Username</span>
            </label>
            <input 
              id='username' 
              type="text" 
              className='input input-bordered w-full h-10' 
              placeholder='Enter Username'
              name='userName'
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="gender" className='label p-2'>
              <span className='text-base label-text text-gray-300'>Select gender</span>
            </label>
            <Checkbox setGender={setGender} />
          </div>
          <div>
            <label htmlFor="password" className='label p-2'>
              <span className='text-base label-text text-gray-300'>Password</span>
            </label>
            <input 
              id='password' 
              type="password" 
              className='input input-bordered w-full h-10' 
              placeholder='Enter password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className='label p-2'>
              <span className='text-base label-text text-gray-300'>Confirm password</span>
            </label>
            <input 
              id='confirm-password' 
              type="password" 
              className='input input-bordered w-full h-10' 
              placeholder='Confirm password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-block btn-sm mt-6 h-10" disabled={isLoading}>
              {isLoading ? "Signing up..." : "Signup"}
            </button>
          </div>
        </form>
        <Link to="/login" className='text-gray-300 hover:text-blue-600 duration-100'>Already have an account</Link>
      </div>
    </div>
  );
};

export default Signup;
