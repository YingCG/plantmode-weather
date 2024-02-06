import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200 p-[5px]">
      <div>
        <NavLink
          to="/"
          className="w-10 h-10 items-center justify-center flex font-bold shadow-md "
        >
          <p className="blue-gradient_text p-[1rem] px-1	">Plant Mode</p>
        </NavLink>
      </div>
      <div className="mx-8">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-purple-500 p-[2rem]" : "text-black p-[5px]"
          }
        >
          Weather's Today
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-purple-500 p-[2rem]" : "text-black p-[5px]"
          }
        >
          Hikoi Around
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-purple-500 p-[2rem]" : "text-black p-[5px]"
          }
        >
          About
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
