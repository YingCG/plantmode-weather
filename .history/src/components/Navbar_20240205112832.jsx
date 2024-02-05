import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      Navbar
      <NavLink
        to="/"
        className="w-10 h-10 items-center justify-center flex font-bold shadow-md"
      >
        Home
      </NavLink>
    </header>
  );
};

export default Navbar;