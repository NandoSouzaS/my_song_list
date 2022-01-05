import React from "react";
import { Menu } from "../../styles";
import Logo from "../Logo";

export default (props) => {
  return (
    <Menu>
      <Logo />
      <li>Top songs</li>
      <li>favorites</li>
    </Menu>
  );
};
