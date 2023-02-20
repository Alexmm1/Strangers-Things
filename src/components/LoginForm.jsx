import React from "react";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  return (
    <div className="form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("test", event);
        }}
      >
        <label>
          Username:
          <input
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
