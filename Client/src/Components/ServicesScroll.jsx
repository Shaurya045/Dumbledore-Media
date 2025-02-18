import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { servicesScroll } from "../assets/assets";

const sections = [
  {
    title: "Discover",
    imageUrl: servicesScroll.discover,
  },
  {
    title: "Strategize",
    imageUrl: servicesScroll.strategize,
  },
  {
    title: "Execute",
    imageUrl: servicesScroll.execute,
  },
  {
    title: "Launch",
    imageUrl: servicesScroll.launch,
  },
  {
    title: "Evolve",
    imageUrl: servicesScroll.evolve,
  },
];

function ServicesScroll() {
  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // Calculate dot position along the arc
  const dotY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-[#090403] to-[#270f09]  text-white">
      {/* Arc and dot */}
      <div className="hidden lg:block absolute left-[-100px] top-[50px] w-[700px] h-[700px] rounded-full border-zinc-800 border-[1px] "></div>
      <div className="hidden lg:block absolute left-[540px] top-[210px] rounded-ful ">
        {/* Animated dot */}
        <motion.div
          className="absolute w-7 h-7 bg-[#ff5733] rounded-lg"
          style={{
            rotate: dotY,
            transformOrigin: "center center",
            left: "calc(50% - 8px)",
            top: "calc(50% - 8px)",
          }}
        />
      </div>
      <div className="container mx-auto min-h-[800px] flex lg:flex-row flex-col">
        {/* Left section */}
        <div className="w-full lg:w-1/2 p-8 md:p-10 lg:p-12 flex items-center">
          <div className="relative w-full max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Design-fed.
              <br />
              Strategy-led.
            </h1>
          </div>
        </div>

        {/* Scrollable right section */}
        <div
          ref={scrollContainerRef}
          className="w-full lg:w-1/2 h-[800px] overflow-y-auto hide-scrollbar"
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="min-h-[600px] lg:min-h-[800px] flex items-center p-6 sm:p-8 md:p-10 lg:p-12"
            >
              <div className="max-w-xl flex flex-row gap-8 justify-center items-center">
                <img
                  src={section.imageUrl || "/placeholder.svg"}
                  alt={`${section.title} illustration`}
                  width={200}
                  height={200}
                  className="w-16 sm:w-20 md:w-24"
                />
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {section.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300">
                    We start with knowing you. It is crucial for us to know how
                    you see the world.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesScroll;
