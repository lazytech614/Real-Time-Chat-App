import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useConversationContext } from '../../context/ConversationContext';
import { extractTime } from '../../utils/extractTime';

const MessageCard = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversationContext();

  function formatTimestampToIST(timestamp) {
    const date = new Date(timestamp);

    // Convert to IST (UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000; // Offset in milliseconds
    const istDate = new Date(date.getTime() + istOffset);

    let hours = istDate.getHours();
    const minutes = istDate.getMinutes();

    // Convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format minutes to always have two digits
    const formattedMinutes = String(minutes).padStart(2, '0');

    // Return formatted time without seconds
    return `${hours}:${formattedMinutes} ${ampm}`;
}

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
        {/* <div className="chat-footer opacity-50">{authUser._id === message.senderId ? `Seen ` : 'Delivered'}</div> */}
        {/* <time className="text-xs opacity-50 text-white">12:45</time> */}
      </div>
    </div>
  );
};

export default MessageCard;
