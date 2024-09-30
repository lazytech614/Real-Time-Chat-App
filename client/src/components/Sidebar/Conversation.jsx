import React from 'react'

const Conversation = () => {
  return (
    <div className='flex gap-4 items-center hover:bg-sky-500 rounded p-2 cursor-pointer'>
       <div className="avatar relative">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <div className='h-[10px] w-[10px] bg-green-600 rounded-full absolute right-0 -top-1'></div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>Username</p>
            <span className='text-xl'>🤖</span>
          </div>
        </div>
    </div>
  )
}

export default Conversation