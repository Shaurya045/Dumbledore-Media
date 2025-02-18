import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { homeServices } from "../assets/assets";

function HomeService() {
  const [activeItem, setActiveItem] = useState(null);

  const springProps = useSpring({
    to: {
      transform: activeItem ? "scale(1.5)" : "scale(1)",
    },
    config: { tension: 200, friction: 10 },
  });

  const handleMouseDown = (item) => {
    setActiveItem(item);
  };

  const handleMouseUp = () => {
    setActiveItem(null);
  };

  return (
    <div className="bg-black min-h-[550px] flex flex-col lg:flex-row gap-8 lg:gap-12  border-b border-[#2b2a2a]">
      <div className="hidden lg:flex flex-row justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative overflow-x-auto lg:overflow-x-visible pb-6 lg:pb-0">
        {homeServices.map((item, index) => (
          <div
            key={index}
            onMouseDown={() => handleMouseDown(item)}
            onMouseUp={handleMouseUp}
            onTouchStart={() => handleMouseDown(item)}
            onTouchEnd={handleMouseUp}
            className="text-white text-base sm:text-lg md:text-xl font-semibold cursor-pointer flex flex-col items-center flex-shrink-0"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="h-[100px] sm:h-[150px] md:h-[200px] w-[2px] sm:w-[3px] bg-[#2e2e2e]"></div>
              <animated.div style={activeItem === item ? springProps : {}}>
                <img
                  className="w-[60px] sm:w-[90px] md:w-[120px] "
                  src={item.image || "/placeholder.svg"}
                  alt={item.service}
                />
              </animated.div>
            </div>
          </div>
        ))}
      </div>
      <div className="self-stretch hidden lg:block h-[1px] lg:h-auto lg:w-[1px] bg-[#2e2e2e]"></div>
      <div className="text-white self-center flex flex-col gap-4 sm:gap-6 md:gap-8 lg:max-w-[40%] p-6 sm:p-8 md:p-10 lg:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#A4A4A4] font-normal">
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
