import React from "react";

export default (props) => {
  let term =''
  return (
    <div>
      <input type="text" placeholder="Search here!" onChange={(e)=>{term=e.target.value}}></input>
      <button
        onClick={() => {
          props.setTerm(term.trim());
        }}
      >Search</button>
    </div>
  );
};
