import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-y-auto'>
        <Conversation />
        <div className='bg-slate-500 w-full h-[1px] my-2'></div>
        <Conversation />
        <div className='bg-slate-500 w-full h-[1px] my-2'></div>
        <Conversation />
        <div className='bg-slate-500 w-full h-[1px] my-2'></div>
        <Conversation />
    </div>
  )
}

export default Conversations