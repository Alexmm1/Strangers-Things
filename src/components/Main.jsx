import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchPost, deletePost } from "../api-adapter";
import LoginForm from "./LoginForm";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import AllPost from "./Allpost";
import NewPost from "./NewPost";
import Button from "react-bootstrap/Button";
import Messages from "./Messages";
import Register from "./Register";
import Profile from "./Profile";

const Main = () => {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const allPost = await fetchPost();
      setPosts(allPost);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  async function delPostDom(id) {
    try {
      console.log(id);
      await deletePost(id);

      getPosts();
    } catch (error) {
      console.log(error);
    }
  }

  const displayPosts = posts.map((e, idx) => {
    return (
      <div className="postContainer" key={idx}>
        <h2>{e.title}</h2>
        <p>{e.description}</p>
        <p>{e.price}</p>

        <div className="postButtons">
          {e.isAuthor === true ? (
            <Button
              onClick={() => {
                delPostDom(e._id);
              }}
              variant="outline-danger"
              size="sm"
              className="logBut"
              type="submit"
            >
              DELETE
            </Button>
          ) : null}

          <Link to={`/Messages/${e._id}`}>
            <Button
              variant="outline-success"
              size="sm"
              className="logBut"
              type="submit"
            >
              MESSAGE ME
            </Button>
          </Link>
        </div>
      </div>
    );
  });

  console.log(posts);

  return (
    <div id="main">
      <BrowserRouter>
        <Navbar posts={posts} setPosts={setPosts} />
        <Routes>
          <Route path="/" element={<AllPost displayPosts={displayPosts} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          {/* <Route
            path="/profile"
            element={<Profile notifications={props.notifications} />}
          /> */}
          <Route path="/newPost" element={<NewPost getPosts={getPosts} />} />
          <Route path="/Messages/:id" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
