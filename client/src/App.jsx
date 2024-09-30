import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='p-4 h-screen w-full flex items-center justify-center'>
      <Home />
    </div>
  )
}

export default App