import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import MessageContainer from '../components/MessageContainer/MessageContainer'
import { useConversationContext } from '../context/ConversationContext'

const Home = () => {
  const {} = useConversationContext();

  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
        <Sidebar />
        <MessageContainer />
        <div></div>
    </div>
  )
}

export default Home