import React from 'react'

const Login = () => {
  return (
    <div className='w-[30vw] flex flex-col items-center justify-center mx-auto'>
        <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 p-4 text-gray-300'>
            <h1 className='text-3xl text-center font-semibold '>Login</h1>
            <form action="" className='my-4'>
                <div>
                <label htmlFor="username" className='label p-2'><span className='text-base label-text text-gray-300'>Username</span></label>
                <input id='username' type="text" className='input input-bordered w-full h-10' placeholder='Enter username'/>
                </div>
                <div>
                <label htmlFor="password" className='label p-2'><span className='text-base label-text text-gray-300'>Password</span></label>
                <input id='password' type="password" className='input input-bordered w-full h-10' placeholder='Enter password'/>
                </div>
                <div>
                <button className="btn btn-block btn-sm mt-6 h-10">Login</button>
                </div>
            </form>
            <a href="#" className='text-gray-300 hover:text-blue-600 duration-100'>Don't have an account</a>
        </div>
    </div>
  )
}

export default Login