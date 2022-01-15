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
          //this made the search button be clicked if the "Enter" key get pressed
          if (event.key === "Enter") {
            document.getElementById("searchBtn").click();
          }
        }}
      ></input>
      <button
        id="searchBtn"
        onClick={() => {
          props.setTerm(term.trim()); //the trim function removes the unwanted Space's, which was the reason for a bug when the input are just one or multiple Space's
        }}
      >
        Search
      </button>
    </div>
  );
};
