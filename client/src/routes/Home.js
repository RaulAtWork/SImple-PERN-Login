import React, { useEffect } from "react";
import useUserData from "../hooks/useUserData";

function Home() {
  const [userData, fetchUserData] = useUserData();

  useEffect(() => {
    fetchUserData();
  }, []); //fetch data the first time

  return (
    <>
      <h1>This is ma home</h1>
      <div>
        <p>Details about me:</p>
        {JSON.stringify(userData)}
      </div>
    </>
  );
}

export default Home;
