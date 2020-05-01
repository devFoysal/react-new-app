import React from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../../../config";

import NavItems from "./NavItems";

const menus = [
  {
    id: 1,
    name: "Home",
    url: `${BASE_URL}/`,
    subMenus: [],
  },
  {
    id: 2,
    name: "About",
    url: `${BASE_URL}/about`,
    subMenus: [],
  },
  {
    id: 3,
    name: "Service",
    url: "#",
    subMenus: [
      {
        id: 1,
        name: "A",
        url: `${BASE_URL}/a`,
      },
      {
        id: 2,
        name: "B",
        url: `${BASE_URL}/b`,
      },
    ],
  },
];

const Navigation = () => {
  return (
    <nav className="navbar primary-menu d-flex">
      <Link className="navbar-brand brand-logo" to={`${BASE_URL}/`}>
        {/* <img className="img-fluid" src="" alt="Brand Logo"/> */}
        <h4>LOGO</h4>
      </Link>
      {menus && <NavItems menus={menus} />}
    </nav>
  );
};

export default Navigation;
