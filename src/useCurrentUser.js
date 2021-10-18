import { useState, useEffect } from "react";
import axios from "axios";

function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getCurrentUser = async () => {
    try {
      setCurrentUser(null);
      setError(null);
      setIsLoading(true);
      const res = await axios.get("https://api.github.com/users/makomori");
      setCurrentUser(res.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  return [currentUser, error, isLoading, getCurrentUser];
}

export default useCurrentUser;
