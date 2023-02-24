import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostForm } from "../api-adapter";
import Button from "react-bootstrap/Button";

export default function NewPost(props) {
  console.log(props);
  const [newTitle, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const [price, setNewPrice] = useState("");
  const navigate = useNavigate();

  const handlePost = async (event) => {
    event.preventDefault();
    const result = await PostForm(newTitle, description, price);
    if (result) {
      props.getPosts();
      navigate("/");
    } else {
      console.log(result.error);
    }
  };

  return (
    <div className="formContainer" id="login">
      <form className="form" onSubmit={handlePost}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newTitle}
            onChange={(event) => {
              console.log(event.target.value);
              setNewTitle(event.target.value);
            }}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => {
              console.log(event.target.value);
              setNewDescription(event.target.value);
            }}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={(event) => {
              console.log(event.target.value);
              setNewPrice(event.target.value);
            }}
          />
        </label>
        <Button
          variant="outline-dark"
          size="sm"
          className="logBut"
          type="submit"
        >
          Post
        </Button>
      </form>
    </div>
  );
}
