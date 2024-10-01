import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useConversationContext } from '../../context/ConversationContext';
import { extractTime } from '../../utils/extractTime';

const MessageCard = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversationContext();

  return (
    <div className='w-full'>
      <div className={`chat chat-${authUser._id === message.senderId ? "end" : "start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={authUser._id === message.senderId ? `${authUser.profilePic}` : `${selectedConversation.profilePic}`} />
          </div>
        </div>
        <div className={`chat-bubble ${authUser._id === message.senderId ? "bg-sky-500 text-white" : ""}`}>{message.message}</div>
        <div className="chat-footer">
          <time className="text-xs opacity-100">{extractTime(message.createdAt)}</time>
        </div>
        {/* <div className="chat-footer opacity-50">{authUser._id === message.senderId ? `Seen ` : 'Delivered'}</div>
        <time className="text-xs opacity-50 text-white">12:45</time> */}
      </div>
    </div>
  );
};

export default MessageCard;
