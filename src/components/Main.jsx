import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchPost } from "../api-adapter";
import LoginForm from "./LoginForm";

const Main = () => {
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    try {
      const allPost = await fetchPost();
      setPosts(allPost);
    } catch (error) {}
  }

  useEffect(() => {
    getPosts();
  }, []);

  const displayPosts = posts.map((e, idx) => {
    return (
      <div className="postContainer" key={idx}>
        <h1>{e.title}</h1>
        <p>{e.description}</p>
      </div>
    );
  });

  console.log(posts);

  return (
    <div id="main">
      <Navbar />
      <LoginForm />
      {displayPosts}
    </div>
  );
};

export default Main;
