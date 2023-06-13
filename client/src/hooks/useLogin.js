import { useState } from "react";
import axios from "axios";

const endpoint = "http://localhost:4040/users/login";

export default function useLogin() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function login(credentials) {
    try {
      setLoading(true);
      const res = await axios.post(endpoint, credentials);
      setResponse(res.data.message);
      setError(false);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setResponse(error.response.data.message);
      } else {
        setResponse("Unexpected error");
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return [response, error, loading, login];
}