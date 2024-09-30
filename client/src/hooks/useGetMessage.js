import { useEffect, useState } from "react";
import { useConversationContext } from "../context/ConversationContext";
import toast from "react-hot-toast";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } =
    useConversationContext();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/messages/${selectedConversation._id}`
        );
        const data = await response.json();

        if (data.error) throw new Error(data.error);

        // Ensure data is an array before setting it
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          setMessages([]); // Reset to an empty array or handle it accordingly
        }
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages, setMessages };
};

export default useGetMessage;
