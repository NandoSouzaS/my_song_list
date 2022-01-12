import React from "react";
import { Menu, SideBar } from "../../styles";

export default (props) => {
  return (
    <SideBar>
      <Menu>
        <li>Top songs</li>
        <li onClick={() => props.setTerm(":favorites")}>favorites</li>
      </Menu>
    </SideBar>
  );
};
