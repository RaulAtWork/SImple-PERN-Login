import React, { useEffect, useState } from "react";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const [response, logError, loading, authenticated, login] = useLogin();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!username || !password) {
      setError("Username and password must be filled");
      return;
    }

    login({ username: username.trim(), password });

    //reset error
    if (error) {
      setError();
    }
  }

  useEffect(() => {
    console.log("authentication changed ", authenticated);
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated]);

  return (
    <div className="box">
      <h1>Login with PERN</h1>
      <form className="stacked" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          Log in
        </button>
      </form>
      {logError && <p className="error">{response}</p>}
      {!logError && response && <p className="success">{response}</p>}
    </div>
  );
}