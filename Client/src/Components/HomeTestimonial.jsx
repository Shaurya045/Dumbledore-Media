import React from "react";
import HomeTestimonialContent from "./HomeTestimonialContent";

function HomeTestimonial() {
  const testimonialText = "TESTIMONIALS";

  return (
    <div>
      <div className="overflow-hidden relative w-full flex flex-col gap-1 md:gap-6 bg-black py-2 sm:py-3 md:py-4">
        {/* Left to right scrolling testimonials */}
        <div className="whitespace-nowrap flex flex-row gap-2 sm:gap-3 md:gap-4 items-center animate-[leftToRight_20s_linear_infinite] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {[...Array(10)].map((_, index) => (
            <React.Fragment key={`ltr-${index}`}>
              <span
                className={`text-gray-300 mx-2 sm:mx-3 md:mx-4 tracking-[1px] ${
                  index % 2 === 0 ? "" : "hidden sm:inline"
                }`}
              >
                {testimonialText}
              </span>
              <span
                className={`text-transparent stroke-text mx-2 sm:mx-3 md:mx-4 tracking-[2px] sm:tracking-[3px] ${
                  index % 2 === 0 ? "hidden sm:inline" : ""
                }`}
              >
                {testimonialText}
              </span>
            </React.Fragment>
          ))}
        </div>
        {/* Right to left scrolling testimonials */}
        <div className="whitespace-nowrap mt-[-10px] sm:mt-[-15px] md:mt-[-20px] flex flex-row gap-2 sm:gap-3 md:gap-4 items-center animate-[rightToLeft_20s_linear_infinite] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {[...Array(10)].map((_, index) => (
            <React.Fragment key={`rtl-${index}`}>
              <span
                className={`text-transparent stroke-text mx-2 sm:mx-3 md:mx-4 tracking-[2px] sm:tracking-[3px] ${
                  index % 2 === 0 ? "" : "hidden sm:inline"
                }`}
              >
                {testimonialText}
              </span>
              <span
                className={`text-gray-300 mx-2 sm:mx-3 md:mx-4 tracking-[1px] ${
                  index % 2 === 0 ? "hidden sm:inline" : ""
                }`}
              >
                {testimonialText}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <HomeTestimonialContent />
    </div>
  );
}

export default HomeTestimonial;
