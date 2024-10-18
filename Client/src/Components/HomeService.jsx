import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { homeServices } from "../assets/assets";

function HomeService() {
  const [activeItem, setActiveItem] = useState(null); // Track the active item

  // Define spring animation for the service items
  const springProps = useSpring({
    to: {
      transform: activeItem ? "scale(1.5)" : "scale(1)",
    },
    config: { tension: 200, friction: 10 }, // Spring physics settings
  });

  // Mouse down to stretch the element
  const handleMouseDown = (item) => {
    setActiveItem(item); // Set the active item on mouse down (stretch)
  };

  // Mouse up to release and go back to normal size
  const handleMouseUp = () => {
    setActiveItem(null); // Reset on mouse up to bounce back
  };

  // const services = [
  //   "Web",
  //   "3D",
  //   "Interior Design",
  //   "Videography",
  //   "Photography",
  // ];

  return (
    <div className="bg-black h-[550px] flex flex-row  gap-[60px] px-[50px] border-t-0 border-l-0 border-r-0 border-b-[#2b2a2a] border-[1px] ">
      <div className="flex flex-row justify-center gap-[20px] relative">
        {homeServices.map((item, index) => (
          <div
            key={index}
            onMouseDown={() => handleMouseDown(item)}
            onMouseUp={handleMouseUp}
            className="text-white text-[20px] font-semibold cursor-pointer flex flex-col items-center"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="h-[200px] w-[3px] bg-[#2e2e2e]"></div>
              <animated.div style={activeItem === item ? springProps : {}}>
                <img
                  className="w-[120px] mt-[100px"
                  src={item.image}
                  alt={item.service}
                />
              </animated.div>
            </div>
          </div>
        ))}
      </div>
      <div className="self-stretch h-full w-[1px] bg-[#2e2e2e] "></div>
      <div className="text-white self-center flex flex-col gap-[20px] max-w-[40%] ">
        <h1 className="text-[35px] font-bold">Our Services</h1>
        <p className="text-[20px] text-[#A4A4A4] font-normal">
          At Dumbledore Media, we bring creativity and innovation to every
          project. Our expert team offers a range of services to help you stand
          out, including professional photography that captures the essence of
          your brand, and high-quality videography that transforms your ideas
          into captivating visual stories. We also design and develop modern,
          responsive websites tailored to your unique needs. For those looking
          to enhance their living or workspace, our interior design solutions
          blend functionality with style. Additionally, our cutting-edge 3D
          video services add a new dimension to your projects, making your
          content truly immersive and engaging.
        </p>
      </div>
    </div>
  );
}

export default HomeService;
