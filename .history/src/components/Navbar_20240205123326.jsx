import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">Home</p>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-purple-500" : "text-black"
        }
      >
        About
      </NavLink>
      <NavLink to="/projects">Project</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </header>
  );
};

export default Navbar;
