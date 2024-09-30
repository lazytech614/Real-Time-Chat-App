import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogOut from '../../hooks/useLogOut';

const Footer = () => {
  const {logout, loading} = useLogOut();

  return (
    <div className='mt-auto'>
      <BiLogOut onClick={()=> logout()} className='h-6 w-6 text-gray-300 cursor-pointer'/>
    </div>
  )
}

export default Footer