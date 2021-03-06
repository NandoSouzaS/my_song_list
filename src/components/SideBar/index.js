import React from "react";
import { Menu, SideBar } from "../../styles";

export default (props) => {
  return (
    <SideBar>
      <Menu>
        <li onClick={() => props.setTerm(":favorites")}>Favorites</li>
      </Menu>
    </SideBar>
  );
};
