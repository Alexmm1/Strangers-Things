import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchPost } from "../api-adapter";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

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

const displayPosts = posts.map ((e,idx)=> {
  return (
    <div key={idx}>
      <h3>{e.title}</h3>
      <p>{e.description}</p>
    </div>
  )
})
  
  return (
    <div id="main">
      <Navbar />
      {displayPosts}
    </div>
  );
};

export default Main;
