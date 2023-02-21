import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Stranger's Things</h2>
      <ul>
        <Link to="/Home">
          <li>Home</li>
        </Link>
        <li>Post</li>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
