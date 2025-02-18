"use client";

import { useContext } from "react";
import { img } from "../assets/assets";
import UserContext from "./Context/UserContext";

function HomeHeader() {
  const { mousePosition, setMousePosition } = useContext(UserContext);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="app relative overflow-hidden w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[700px] cursor-none"
      onMouseMove={handleMouseMove}
    >
      <div className="inner-background w-full h-full absolute z-[1]">
        <img
          className="w-full h-full object-cover filter brightness-50"
          src={img.hogwartsBG || "/placeholder.svg"}
          alt="Hogwarts background"
        />
      </div>
      <div
        className="front-background absolute w-full h-full bg-blue-950 z-[2] transition-[background] duration-200 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 0px, rgba(0, 0, 0, 1) 150px)`,
        }}
      ></div>
      <div
        className="custom-cursor absolute w-[65px] h-[65px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] z-[4] pointer-events-none transition-transform duration-100 ease-in-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          backgroundImage: `url(${img.dumbledoreStick})`,
          backgroundSize: "cover",
          transform: "rotate(90deg)",
        }}
      ></div>
      <div className="absolute w-full h-full z-[3] flex flex-col justify-center items-center px-4 text-center">
        <h1 className="outline-animation text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-black font-['Montserrat'] text-white leading-tight">
          DUMBLEDORE MEDIA
        </h1>
      </div>
    </div>
  );
}

export default HomeHeader;
