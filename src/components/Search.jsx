import React, { useState } from "react";
import AllPost from "./Allpost";

export const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchPost = (e) => {
    e.preventDefault();
    const filteredSearch = props.posts.filter((post) => {
      post.title.includes(searchTerm);
    });
    console.log(filteredSearch);
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
