import React, { useContext, useEffect } from "react";
import useUserData from "../hooks/useUserData";
import useLogout from "../hooks/useLogout";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

function Home() {
  const [userData, fetchUserData] = useUserData();
  const [successful, error, logout] = useLogout();

  const { setAuthentication } = useContext(UserContext);

  useEffect(() => {
    fetchUserData();
  }, []); //fetch data the first time

  function handleClick() {
    logout();
  }

  useEffect(() => {
    if (successful) {
      setAuthentication(false);
    }
  }, [successful]);

  function HomeBody() {
    return (
      <>
        <h1>This is ma home</h1>
        <div>
          <p>Details about me:</p>
          {JSON.stringify(userData)}
        </div>
        {error && <p className="error">{error}</p>}
        <button onClick={handleClick}>Log out</button>
      </>
    );
  }
  return successful ? <Navigate to="/login" /> : <HomeBody />;
}

export default Home;
