import { useState } from "react";
import axios from "axios";

const endpoint = "http://localhost:4040/users/login";

export default function useLogin() {
  const [response, setResponse] = useState();
  const [error, setError] = useState(false);

  async function login(credentials) {
    try {
      const res = await axios.post(endpoint, credentials);
      console.log(JSON.stringify(res));
      setResponse(res.ok);
      setError(false);
    } catch (error) {
      setResponse("Login failed");
      setError(true);
    }
  }

  return [response, error, login];
}
