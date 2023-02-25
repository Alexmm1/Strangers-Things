import React from "react";
import { useState } from "react";
import { Login } from "../api-adapter";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

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
      console.log(result.error);
    }
  };

  return (
    <div className="formContainer" id="login">
      <form className="form" onSubmit={handleSubmit}>
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
        <Button
          variant="outline-dark"
          size="sm"
          className="logBut"
          type="submit"
        >
          Log in
        </Button>
        <Link to={"/"}>
          <p className="singUp">Don't have an account? Sing Up</p>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
