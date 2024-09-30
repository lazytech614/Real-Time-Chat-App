import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

const App = () => {
  const {authUser} = useAuthContext();

  return (
    <div className='p-4 h-screen w-full flex items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Login />} />
          <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to="/" />: <Signup />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  )
}

export default App