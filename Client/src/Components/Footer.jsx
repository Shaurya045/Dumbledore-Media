import React from "react";
import { Link, NavLink } from "react-router-dom";
import { img } from "../assets/assets";

function Footer() {
  return (
    <div className="flex flex-col border-t-[#2b2a2a] border-l-0 border-r-0 border-b-0 border-[1px]">
      <div className="bg-black pl-[100px] max-[1300px]:pl-[70px] max-[580px]:pl-[20px] pt-[60px] pb-[100px] max-[1023px]:pb-[60px] max-[1023px]:gap-[5px] grid lg:grid-cols-[2.1fr_0.6fr_1.1fr_1.5fr]">
        <div>
          <Link to="/">
            <div className="flex flex-row gap-[10px] max-[580px]:gap-[5px] items-center">
              <img
                className="w-[300px] max-[1251px]:w-[60px max-[1023px]:w-[70px "
                src={img.Logo}
                loading="lazy"
                alt="DumbledoreLogo"
              />
              {/* <h2 className="text-[35px] max-[1251px]:text-[32px] max-[1070px]:text-[30px] max-[1023px]:text-[35px] max-[580px]:text-[30px] max-[580px]:leading-[40px] font-['Playfair+Display'] font-semibold text-white  ">
                Dumbledore Media
              </h2> */}
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-[20px] max-[1023px]:px-[15px] ">
          <h2 className="pt-[20px] text-[22px] max-[1251px]:text-[20px] max-[1023px]:text-[21px] font-semibold font-['Raleway'] text-white ">
            PAGES
          </h2>
          <ul className="flex flex-col justify-between text-[20px] max-[1251px]:text-[18px] gap-[16px] max-[1023px]:gap-[13px] font-semibold font-['Raleway'] ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white" : "text-[#A4A4A4]"
                  } hover:text-white`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white" : "text-[#A4A4A4]"
                  } hover:text-white`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white" : "text-[#A4A4A4]"
                  } hover:text-white`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white" : "text-[#A4A4A4]"
                  } hover:text-white`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white" : "text-[#A4A4A4]"
                  } hover:text-white`
                }
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white" : "text-[#A4A4A4]"
                  } hover:text-white`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px] max-[1023px]:px-[15px]">
          <h2 className="pt-[20px] text-[22px] max-[1251px]:text-[20px] max-[1023px]:text-[21px] font-semibold font-['Raleway'] text-white ">
            RESOURCES
          </h2>
          <ul className="flex flex-col justify-between text-[20px] max-[1251px]:text-[18px] gap-[16px] max-[1023px]:gap-[13px] font-semibold font-['Raleway'] ">
            <li>
              <NavLink
                to="/privacypolicy"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white" : "text-[#A4A4A4]"
                  } hover:text-white`
                }
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/termscondition"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white" : "text-[#A4A4A4]"
                  } hover:text-white`
                }
              >
                Terms & Conditions
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px] max-[1023px]:px-[15px]">
          <h2 className="pt-[20px] text-[22px] max-[1251px]:text-[20px] max-[1023px]:text-[21px] font-semibold font-['Raleway'] text-white ">
            CONTACT US
          </h2>
          <ul className="flex flex-col justify-between text-[20px] max-[1251px]:text-[18px] gap-[16px] max-[1023px]:gap-[13px] font-semibold font-['Raleway'] text-[#A4A4A4] ">
            <li>
              Address: <span className="font-normal">Patna, Bihar</span>
            </li>
            <li>
              Mobile: <span className="font-normal">(+91)76672 61255</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-black px-[100px] max-[1300px]:px-[85px] max-[580px]:px-[30px] py-[10px] text-white font-semibold font-["Raleway"] '>
        &copy; Dumbledore Media Pvt. Ltd. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
