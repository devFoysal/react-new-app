import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";
const NavItems = ({menus}) => {
  return (
    <ul className="navbar-nav flex-row">
      {menus.length > 0
        ? menus.map((menu) =>
            menu.subMenus.length > 0 ? (
              <li className="nav-item dropdown" key={menu.id}>
                <Link
                  className="nav-link"
                  to={menu.url}
                  role="button"
                >
                  {menu.name} <FontAwesomeIcon icon={faChevronDown} />
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {menu.subMenus.map((submenu) => (
                    <NavItem menu={submenu} key={submenu.id}/>
                  ))}
                </ul>
              </li>
            ) : (
             <NavItem menu={menu} key={menu.id}/>
            )
          )
        : null}
    </ul>
  );
};

export default NavItems;
