import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavbarNew = () => {
  return (
    <ul>
      <li>
        <img src={logo} />
      </li>
      <li>
        {" "}
        <NavLink to="/home">HOME </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/pets"> PETS </NavLink>{" "}
      </li>
    </ul>
  );
};

export default NavbarNew;
