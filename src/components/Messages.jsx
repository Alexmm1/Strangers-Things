import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postMessage } from "../api-adapter";

export default function Messages() {
  let { id } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleMsg = async (event) => {
    event.preventDefault();
    try {
      await postMessage(id, message);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="msg">
      <form className="form" onSubmit={handleMsg}>
        <label>
          Username:
          <input
            placeholder="message"
            value={message}
            type="text"
            name="message"
            onChange={(event) => {
              console.log(event.target.value);
              setMessage(event.target.value);
            }}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
