import React, { useState } from "react";
import useRegister from "../hooks/useRegister";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [response, errorRegister, register] = useRegister();

  function handleSubmit(event) {
    event.preventDefault();
    const usernameTrimmed = username.trim();
    setUsername(usernameTrimmed);
    if (!username || !password) {
      setError("Username and password must be filled");
      return;
    }

    register({ username: usernameTrimmed, password });

    //reset error
    if (error) {
      setError();
    }
  }

  return (
    <>
      <form className="stacked" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Register now!</button>
      </form>
      {errorRegister && <p className="error"> {errorRegister} </p>}
      {response && <p className="success">{response} </p>}
    </>
  );
}

export default Register;
