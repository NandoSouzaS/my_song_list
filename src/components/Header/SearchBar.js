import React, { useState } from "react";

export default (props) => {
  const text = props.term;

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
