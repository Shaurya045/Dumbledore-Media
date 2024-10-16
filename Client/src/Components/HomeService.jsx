import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

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

  const services = [
    "Web",
    "3D",
    "VFX",
    "Interior Design",
    "Videography",
    "Photography",
  ];

  return (
    <div className="bg-black flex flex-row items-center gap-[60px] px-[50px] ">
      <div className="flex flex-row gap-[20px]">
        {services.map((service) => (
          <animated.div
            key={service}
            style={activeItem === service ? springProps : {}}
            onMouseDown={() => handleMouseDown(service)}
            onMouseUp={handleMouseUp}
            className="text-white text-[20px] font-semibold cursor-pointer"
          >
            {service}
          </animated.div>
        ))}
      </div>
      <div className="h-[100px] w-[1px] bg-[#2e2e2e] "></div>
      <div className="text-white text-[25px] font-bold ">Our Services</div>
    </div>
  );
}

export default HomeService;
