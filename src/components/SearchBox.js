import React from "react";
import "./SearchBox.css";

export default function SearchBox({ searchfield, searchChange }) {
  return (
    <div className="pa2">
      <h1>RoboSearch</h1>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}
