import { useContext } from "react";
import { img } from "../assets/assets";
import UserContext from "./Context/UserContext";

function HomeHeader() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { mousePosition, setMousePosition } = useContext(UserContext);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    // console.log(mousePosition);
  };
  return (
    <div
      className="app relative overflow-hidden w-full h-[700px] cursor-non "
      onMouseMove={handleMouseMove}
    >
      <div className="inner-background w-full h-full absolute z-[1]  ">
        <img
          className="w-full h-full object-cover filter brightness-50 "
          src={img.hogwartsBG}
          alt=""
        />
      </div>
      <div
        className="front-background absolute w-full h-full bg-blue-950 z-[2] [transition:_background_0.2s_ease-out] "
        style={{
          background: `radial-gradient(circle at ${mousePosition.x - 120}px ${
            mousePosition.y - 200
          }px, transparent 0px, rgba(0, 0, 0, 1) 200px)`,
        }}
      ></div>
      <div
        className="custom-cursor absolute w-[130px] h-[130px] z-[4] pointer-events-none [transition:_transform_0.1s_ease-in-out] "
        style={{
          left: `${mousePosition.x - 0}px`,
          top: `${mousePosition.y - 0}px`,
          backgroundImage: `url(${img.dumbledoreStick})`, // Assuming img.cursorImage points to your custom cursor image
          backgroundSize: "cover",
          transform: "rotate(90deg)",
        }}
      ></div>
      <div className="absolute w-full h-full z-[3] flex flex-row justify-center items-center">
        <h1 className="outline-animation text-[100px] font-black font-['Montserrat'] text-white">
          DUMBLEDORE MEDIA
        </h1>
      </div>
    </div>
  );
}

export default HomeHeader;
