import React from "react";
import { useState } from "react";
import { Login } from "../api-adapter";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await Login(username, password);
    if (result != undefined) {
      localStorage.setItem("token", result.data.token);
      navigate("/");
    } else {
      alert("User not identify! Please try Again");
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
