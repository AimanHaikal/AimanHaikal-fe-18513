// components/searchForm.js
import React from "react";
import { SlMagnifier } from "react-icons/sl";

const SearchForm = () => {
  return (
    <div className="search-form header-bottom-right">
      <h1 className="search-title">Search your movies here!</h1>
      <div className="search-input-wrapper">
        <SlMagnifier
          color="black"
          style={{ marginRight: "10px", marginLeft: "5px", marginTop: "-15px" }}
        />
        <input
          type="text"
          placeholder="Theatre name..."
          className="search-input"
        />
      </div>
      <div className="date-time-picker">
        <input type="datetime-local" className="datetime-input" />
        <input type="datetime-local" className="datetime-input" />
      </div>
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchForm;
