import React from 'react'

const MessageCard = () => {
  return (
    <div className='w-full'>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        {/* <div className="chat-header">
          Anakin
        </div> */}
        <div className="chat-bubble bg-blue-600 text-white max-w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aperiam dolores quod maxime ad asperiores atque similique sapiente possimus vero doloribus error, magni beatae ab minus aut a recusandae.</div>
        <div className='flex items-center gap-4'>
        {/* <div className="chat-footer opacity-50">Seen</div> */}
        <time className="text-xs opacity-50">12:46</time>
        </div>
      </div>
    </div>
  )
}

export default MessageCard