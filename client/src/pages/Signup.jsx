import React from 'react'
import Checkbox from '../components/Dropdown/Checkbox'

const Signup = () => {
  return (
    <div className='w-[30vw] flex flex-col items-center justify-center mx-auto'>
        <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 p-4 text-gray-300'>
            <h1 className='text-3xl text-center font-semibold '>Signup</h1>
            <form action="" className='my-4'>
                <div>
                    <label htmlFor="fullname" className='label p-2'><span className='text-base label-text text-gray-300'>Fullname</span></label>
                    <input id='fullname' type="text" className='input input-bordered w-full h-10' placeholder='Enter fullname'/>
                </div>
                <div>
                    <label htmlFor="username" className='label p-2'><span className='text-base label-text text-gray-300'>Username</span></label>
                    <input id='username' type="text" className='input input-bordered w-full h-10' placeholder='Enter Username'/>
                </div>
                <div>
                    <label htmlFor="gender" className='label p-2'><span className='text-base label-text text-gray-300'>Select gender</span></label>
                    {/* <input id='gender' type="password" className='input input-bordered w-full h-10' placeholder='Enter password'/> */}
                    <Checkbox />
                </div>
                <div>
                    <label htmlFor="password" className='label p-2'><span className='text-base label-text text-gray-300'>Password</span></label>
                    <input id='password' type="password" className='input input-bordered w-full h-10' placeholder='Enter password'/>
                </div>
                <div>
                    <label htmlFor="confirm-password" className='label p-2'><span className='text-base label-text text-gray-300'>Confirm password</span></label>
                    <input id='confirm-password' type="password" className='input input-bordered w-full h-10' placeholder='Confirm password'/>
                </div>
                <div>
                    <button className="btn btn-block btn-sm mt-6 h-10">Signup</button>
                </div>
            </form>
            <a href="#" className='text-gray-300 hover:text-blue-600 duration-100'>Already have an account</a>
        </div>
    </div>
  )
}

export default Signup