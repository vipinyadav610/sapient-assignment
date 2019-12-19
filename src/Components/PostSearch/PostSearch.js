import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PostSearch.scss";
import { This } from "../../../node_modules/fp-ts/lib/These";

const PostSearch = props => {
  let [search, setSearch] = useState("");

  return (
    <div className="post-search-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          props.onSearchPost(search);
        }}
      >
        <input
          onChange={e => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Search.."
          name="search"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="post-sort-container">
        <select className="post-sort-by" onChange={props.onSortByChange}>
          <option value="id">Sort by id</option>
          <option value="name">Sort by name</option>
        </select>
        <select onChange={props.onSortOrderChange}>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </div>
    </div>
  );
};

PostSearch.propTypes = {};

export default PostSearch;
