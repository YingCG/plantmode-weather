import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      Navbar
      <NavLink
        to="/"
        className="w-10 h-10 items-center rounded-lg bg-white justify-center flex font-bold shadow-md"
      >
        <p>Ying</p>
      </NavLink>
    </header>
  );
};

export default Navbar;
