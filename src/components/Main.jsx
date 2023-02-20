import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchPost } from "../api-adapter";

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

  return (
    <div id="main">
      <Navbar />
    </div>
  );
};

export default Main;
