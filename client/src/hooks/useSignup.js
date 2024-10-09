import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const signup = async (formData) => {
    setIsLoading(true);

    const success = handleInputs(formData);
    // console.log(success);
    if (!success) {
      setIsLoading(false);
      return;
    }

    try {
      const data = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      ).then((res) => res.json());

      if (data.success) {
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
      }
      if (!data.success) toast.error(data.error);
    } catch (error) {
      console.error("Error signing up:", error.message);
      toast.error("Signup failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading };
};

export default useSignup;

function handleInputs({
  fullName,
  userName,
  gender,
  password,
  confirmPassword,
}) {
  if (!fullName || !userName || !gender || !password || !confirmPassword) {
    toast.error("Please fill all the fields!");
    return false;
  } else if (password.length < 6) {
    toast.error("Please enter a password with minimum 6 characters");
    return false;
  } else if (password !== confirmPassword) {
    toast.error("Passwords do not match!");
    return false;
  }
  return true;
}
