import React, { useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);

  const getConversation = async () => {
    setLoading(true);

    try {
      const data = await fetch("/api/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }).then((res) => res.json());

      return data;
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getConversation };
};

export default useGetConversation;
