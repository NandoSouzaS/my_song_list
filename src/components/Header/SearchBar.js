import React from "react";

export default (props) => {

  return (
    <input
      type="text"
      placeholder="Search here!"
      onChange={(e) => {
        props.setTerm(e.target.value);
      }}
    ></input>
  );
};
