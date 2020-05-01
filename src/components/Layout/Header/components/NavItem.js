import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({menu}) => {
  return (
    <li className="nav-item" key={menu.id}>
      <NavLink className="nav-link" to={menu.url}>
        {menu.name}
      </NavLink>
    </li>
  );
}

export default NavItem
