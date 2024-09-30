import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  })

  const {loading, login} = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();
    await login(formData)
  }

  return (
    <div className='w-[30vw] flex flex-col items-center justify-center mx-auto'>
        <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 p-4 text-gray-300'>
            <h1 className='text-3xl text-center font-semibold '>Login</h1>
            <form onSubmit={handleSubmit} className='my-4'>
                <div>
                <label htmlFor="username" className='label p-2'><span className='text-base label-text text-gray-300'>Username</span></label>
                <input 
                  id='username' 
                  type="text" 
                  className='input input-bordered w-full h-10' 
                  placeholder='Enter username'
                  name='userName'
                  value={formData.userName}
                  onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="password" className='label p-2'><span className='text-base label-text text-gray-300'>Password</span></label>
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
                <button className="btn btn-block btn-sm mt-6 h-10">{loading ? "Loggingin..." : "Login"}</button>
                </div>
            </form>
            <Link to="/signup" className='text-gray-300 hover:text-blue-600 duration-100'>Don't have an account</Link>
        </div>
    </div>
  )
}

export default Login