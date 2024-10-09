import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogOut = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/logout`,
        {
          method: "POST",
          headers: { "Content-Type": "appication/json" },
        }
      ).then((res) => res.json());

      if (data.error) throw new Error(data.error);

      localStorage.removeItem("chat-user");
      setAuthUser(null);
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogOut;
