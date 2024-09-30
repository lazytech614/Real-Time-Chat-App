import React, {useState} from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../../hooks/useSendMessage';


const InputBox = () => {
  const {loading, sendMessage} = useSendMessage()

  const [message, setMessage] = useState("")

  const handleSubmit = async (e)=> {
    e.preventDefault()
    if(!message) return;

    await sendMessage(message)
    setMessage("")
  }
  return (
    <form onSubmit={handleSubmit} className='px-4 h-10 bg-[#2C3441] mx-4 mb-4 rounded-lg flex justify-between items-center border border-slate-500'>
        <input 
          type="text" 
          className='h-full w-[90%] bg-transparent border-none outline-none' 
          placeholder='Send a message...'
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
        />
        <button className='w-[10%] h-full flex justify-end items-center cursor-pointer'>
            <IoIosSend className='h-6 w-6 text-gray-200'/>
        </button>
    </form>
  )
}

export default InputBox