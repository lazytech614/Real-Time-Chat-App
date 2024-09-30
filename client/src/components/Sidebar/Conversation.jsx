import React from 'react';
import getRandomEmoji from '../../utils/emoji';
import { useConversationContext } from '../../context/ConversationContext';

const Conversation = ({ fullName, profilePic, _id }) => {
  const { selectedConversation, setSelectedConversation } = useConversationContext(); // Corrected invocation
  const isSelected = selectedConversation?._id === _id;

  return (
    <div
      onClick={() => setSelectedConversation({ _id, fullName, profilePic })}
      className={`flex gap-4 items-center hover:bg-sky-500 rounded p-2 cursor-pointer ${isSelected ? 'bg-sky-500' : ''}`}
    >
      <div className="avatar relative">
        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="h-[10px] w-[10px] bg-green-600 rounded-full absolute right-0 -top-1"></div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">{fullName}</p>
          <span className="text-xl">{getRandomEmoji()}</span>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
