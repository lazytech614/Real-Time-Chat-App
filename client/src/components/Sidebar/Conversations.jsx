import React, { useEffect, useState } from 'react';
import Conversation from './Conversation';
import useGetConversation from '../../hooks/useGetConversation';

const Conversations = () => {
  const { loading, getConversation } = useGetConversation();
  const [conversations, setConversations] = useState([]);

  const lastIndex = conversations.length - 1;

  useEffect(() => {
    const fetchConversations = async () => {
      const data = await getConversation();
      if (data) {
        setConversations(data); // set the fetched conversations
      }
    };
    fetchConversations();
  }, []);

  // console.log(conversations);

  if (loading) {
    return <div>Loading...</div>; // handle loading state
  }

  return (
    <div className='py-2 flex flex-col overflow-y-auto'>
      {conversations.length > 0 ? (
        conversations.map((conversation, index) => (
          <React.Fragment key={index}>
            <Conversation {...conversation} />
            <div className={`${lastIndex === index ? "hidden" : "block"} bg-slate-500 w-full h-[1px] my-2`}></div>
          </React.Fragment>
        ))
      ) : (
        <div>No conversations found</div>
      )}
    </div>
  );
};

export default Conversations;
