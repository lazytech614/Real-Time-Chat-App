import React, { useEffect, useRef } from 'react';
import MessageCard from './MessageCard';
import useGetMessage from '../../hooks/useGetMessage';
import { useConversationContext } from '../../context/ConversationContext';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { loading, messages, setMessages } = useGetMessage();
  const { selectedConversation } = useConversationContext();

  useListenMessages()

  const lastMessageRef = useRef();

  useEffect(() => {
    // Reset messages when changing conversations
    setMessages([]); 
  }, [selectedConversation, setMessages]);

  useEffect(() => {
    // Scroll to the last message after messages have been updated
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Update scroll behavior when messages change

  return (
    <div className='p-4 flex-1 overflow-y-auto'>
      {loading ? (
        <p>Loading messages...</p> // Optional loading message
      ) : (
        messages.map((message, index) => (
          <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <MessageCard message={message} />
          </div>
        ))
      )}
    </div>
  );
};

export default Messages;
