import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      Navbar
      <NavLink to="/" className="w-10 h">
        Home
      </NavLink>
    </header>
  );
};

export default Navbar;
