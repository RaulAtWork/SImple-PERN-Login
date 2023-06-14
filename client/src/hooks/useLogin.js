import { useState } from "react";
import axios from "axios";

const endpoint = "http://localhost:4040/users/login";

export default function useLogin() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  async function login(credentials) {
    try {
      setLoading(true);
      const res = await axios.post(endpoint, credentials, {
        withCredentials: true,
      });
      setResponse(res.data.message);
      setError(false);
      setAuthenticated(true);
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

  return [response, error, loading, authenticated, login];
}
