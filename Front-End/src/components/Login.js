import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    if (!username || !password) {
      setError("Username and password must be filled");
      return;
    }

    if (error) {
      setError();
    }
  }

  return (
    <div className="box">
      <h1>Login with PERN</h1>
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}