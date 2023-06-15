import axios from "axios";
import { useState } from "react";

//TODO take out endpint variables
const endpoint = "http://localhost:4040/users/logged";

export default function useUserData() {
  const [userData, setUserData] = useState("");

  async function fetchUserData() {
    try {
      const response = await axios.get(endpoint, { withCredentials: true });
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return [userData, fetchUserData];
}
