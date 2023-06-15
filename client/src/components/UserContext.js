import React, { useState } from "react";

export const UserContext = React.createContext({
  authenticated: false,
  setAuthentication: (value) => {},
});

export default function UserProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  function setAuthentication(value) {
    setAuthenticated(value);
  }

  return (
    <UserContext.Provider value={{ authenticated, setAuthentication }}>
      {children}
    </UserContext.Provider>
  );
}
