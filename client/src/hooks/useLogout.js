import axios from "axios";
import { useState } from "react";

//TODO extract endpint
const endpoint = "http://localhost:4040/users/logout";

export default function useLogout() {
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState("");

  async function logout() {
    try {
      const response = await axios.get(endpoint, { withCredentials: true });
      if (response.data.message) {
        setSuccessful(true);
      }
    } catch (error) {
      console.log(error);
      setError("Log out failed");
      setSuccessful(false);
    }
  }

  return [successful, error, logout];
}
