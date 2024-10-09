import { useState } from "react";
import toast from "react-hot-toast";
import { useConversationContext } from "../context/ConversationContext";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const {
    messages,
    setMessages,
    selectedConversation,
    setSelectedConversation,
  } = useConversationContext();

  const sendMessage = async (message) => {
    setLoading(true);

    try {
      const data = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/messages/send/${
          selectedConversation._id
        }`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      ).then((res) => res.json());

      // console.log(data);
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
