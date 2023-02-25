import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const searchPost = (e) => {
    e.preventDefault();
    const searchToLower = searchTerm.toLowerCase();
    const filteredSearch = props.posts.filter((post) => {
      const postToLower = post.title.toLowerCase();
      return postToLower.includes(searchToLower);
    });

    console.log(filteredSearch);
    props.setPosts(filteredSearch);
    navigate("/");
  };

  return (
    <div className="search">
      <form onSubmit={searchPost}>
        <input
          type="text"
          id="searchField"
          name="search"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchTerm(e.target.value);
          }}
        />
        <button id="search">Search</button>
      </form>
    </div>
  );
};
