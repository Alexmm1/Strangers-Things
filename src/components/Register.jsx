import React, { useState } from "react";
import { postRegister } from "../api-adapter";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postRegister(username, password);
    localStorage.setItem("token", result.data.token);
    setUsername("");
    setPassword("");
    navigate("/login");
  };

  return (
    <div className="formContainer" id="register">
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
        <label>
          Confirm Password:
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
          Sing Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
