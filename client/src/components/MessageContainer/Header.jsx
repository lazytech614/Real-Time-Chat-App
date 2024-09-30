import React from 'react'
import { useConversationContext } from '../../context/ConversationContext';

const Header = () => {
  const { selectedConversation } = useConversationContext();
  
  return (
    <div className='h-10 w-full bg-[#64748B] text-gray-200 text-[12px] flex items-center px-4'>
        To: <span className='text-black font-bold text-[16px]'>&nbsp;{selectedConversation.fullName}</span>
    </div>
  )
}

export default Header