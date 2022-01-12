import React from "react";

export default (props) => {
  let term = "";
  return (
    <div>
      <input
        type="text"
        placeholder="Search here!"
        id="searchBar"
        onChange={(e) => {
          term = e.target.value;
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            document.getElementById("searchBtn").click();
          }
        }}
      ></input>
      <button
        id="searchBtn"
        onClick={() => {
          props.setTerm(term.trim());
        }}
      >
        Search
      </button>
    </div>
  );
};
