import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const navigate = useNavigate();

  const login = async (formData) => {
    setLoading(true);

    const success = checkInput(formData);
    if (!success) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();

      // Check for success before doing anything else
      if (data.success) {
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
        navigate("/"); // Navigate only if login is successful
      } else {
        throw new Error(data.message); // Use the message from the server response
      }
    } catch (err) {
      toast.error(err.message); // Show only the error message
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function checkInput({ userName, password }) {
  if (!userName || !password) {
    toast.error("Please fill all the fields");
    return false;
  }
  return true;
}
