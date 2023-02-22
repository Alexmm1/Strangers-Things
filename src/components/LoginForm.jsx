import React from "react";
import { useState } from "react";
import { Login } from "../api-adapter";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await Login(username, password);
    if (result.success) {
      localStorage.setItem("token", result.token);
    } else {
      console.log(result.error);
    }
  };

  return (
    <div className="form" id="login">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            placeholder="Username"
            value={username}
            type="text"
            name="username"
            onChange={(event) => {
              console.log(event.target.value);
              setUsername(event.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            placeholder="Password"
            value={password}
            type="text"
            name="password"
            onChange={(event) => {
              console.log(event.target.value);
              setPassword(event.target.value);
            }}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
