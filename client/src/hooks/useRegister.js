import axios from "axios";
import { useState } from "react";

//TODO take out endpint variables
const endpoint = "http://localhost:4040/users/register";

export default function useRegister() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function resetMessages() {
    setError("");
    setMessage("");
  }

  async function register({ username, password }) {
    resetMessages();
    try {
      const response = await axios.post(endpoint, { username, password });
      console.log(response.data);
      if (response.data && response.data.username) {
        setMessage("Registration successful.");
      } else {
        setError("There was a problem reload the page.");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("Unexpected Error, please try again later");
      }
    }
  }

  return [message, error, register];
}
