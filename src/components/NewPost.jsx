import React from "react";
import { useState } from "react";

export default function NewPost() {
  const [newTitle, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const [body, setNewBody] = useState("");
  return (
    <div className="form" id="login">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          Tittle:
          <input
            type="text"
            name="title"
            value={newTitle}
            onChange={(event) => {
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
              setNewDescription(event.target.value);
            }}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            name="body"
            value={body}
            onChange={(event) => {
              setNewBody(event.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
