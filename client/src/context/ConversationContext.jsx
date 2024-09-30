import { createContext, useContext, useState } from 'react';

export const ConversationContext = createContext();

export const useConversationContext = () => {
  return useContext(ConversationContext);
};

export const ConversationContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null); // Corrected typo

  return (
    <ConversationContext.Provider value={{ messages, setMessages, selectedConversation, setSelectedConversation }}>
      {children}
    </ConversationContext.Provider>
  );
};
