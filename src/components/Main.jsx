import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchPost } from "../api-adapter";
import LoginForm from "./LoginForm";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import AllPost from "./Allpost";

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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/Home"
            element={<AllPost displayPosts={displayPosts} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
