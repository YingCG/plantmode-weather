import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <div>
        <NavLink
          to="/"
          className="w-10 h-10 items-center justify-center flex font-bold shadow-md"
        >
          <p className="blue-gradient_text">Home</p>
        </NavLink>
      </div>
      <div>
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
      </div>
    </header>
  );
};

export default Navbar;
