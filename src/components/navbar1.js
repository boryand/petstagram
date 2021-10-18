import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavbarNew = () => {
  return (
    <ul className='ul'>
      <li>
        <img src={logo} />
      </li>
      <li className = 'li'>
        {" "}
        <NavLink to="/">HOME </NavLink>
      </li>
      <li className='li'>
        {" "}
        <NavLink to="/pets"> PETS </NavLink>{" "}
      </li>
    </ul>
  );
};

export default NavbarNew;
