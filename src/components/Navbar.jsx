import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import AllPost from "./Allpost";

function Navbar(props) {
  return (
    <div className="navbar">
      <h2>Stranger's Things</h2>
      <Search posts={props.posts} />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/newPost">
          <li>Create new post</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
