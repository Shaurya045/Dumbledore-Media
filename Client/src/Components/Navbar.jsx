import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-transparent w-full absolute top-0 left-0 z-[50] flex flex-row items-center justify-between py-[24px] px-[60px] ">
      <div>
        <img src="" alt="Logo" />
      </div>
      <div>
        <ul className="flex flex-row gap-[50px] text-[#A4A4A4] text-[18px] ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-white" : ""} hover:text-white`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-white" : ""} hover:text-white`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${isActive ? "text-white" : ""} hover:text-white`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${isActive ? "text-white" : ""} hover:text-white`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `${isActive ? "text-white" : ""} hover:text-white`
              }
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-white" : ""} hover:text-white`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className="w-[150px] h-[50px] border-white border-[2px] hover:bg-white text-white hover:text-black rounded-[30px] text-[18px] font-medium ">
          Get a Quote
        </button>
      </div>
    </div>
  );
}

export default Navbar;
