import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { img } from "@/assets/assets";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-transparent w-full absolute top-0 left-0 z-[50] py-6  md:px-[60px]">
      <div className="px-4 flex items-center justify-between">
        <Link to="/">
          <img src={img.Logo1} alt="Logo" width={50} height={50} />
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8 text-[#A4A4A4] text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path ? "text-white" : ""
                  } hover:text-white transition-colors`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to={"/contact"}>
            <button className="w-[150px] h-[50px] border-white border-2 hover:bg-white text-white hover:text-black rounded-[30px] text-lg font-medium transition-colors">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="block lg:hidden mt-4 bg-[#121212] p-6 rounded-2xl">
          <ul className="flex flex-col space-y-4 text-[#A4A4A4] text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path ? "text-white" : ""
                  } hover:text-white transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full h-[50px] border-white border-2 hover:bg-white text-white hover:text-black rounded-[30px] text-lg font-medium transition-colors">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
