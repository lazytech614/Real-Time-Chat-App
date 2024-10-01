import React, {useState} from 'react'
import Header from './Header'
import InputBox from './InputBox'
import Messages from './Messages'
import { TiMessages } from "react-icons/ti";
import { useConversationContext } from '../../context/ConversationContext';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const { selectedConversation } = useConversationContext();
  const {authUser} = useAuthContext()

  return (
    <>{selectedConversation? (
      <div className='md:min-w-[600px] flex flex-col justify-between'>
        <Header />
        <Messages />
        <InputBox />
      </div>
    ) : (
      <div className='md:min-w-[450px] flex items-center justify-center h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
          <p>Welcome 👋 {authUser.userName} ❄</p>
          <p>Select a chat to start messaging</p>
          <TiMessages className='text-3xl md:text-6xl text-center' />
        </div>
      </div>
    )}</>
  )
}

export default MessageContainer