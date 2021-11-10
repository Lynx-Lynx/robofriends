import React from "react";
import "../styles/SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="searchbox"
        type="search"
        placeholder=" search robots..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
