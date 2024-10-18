import React from "react";
import HomeTestimonialContent from "./HomeTestimonialContent";

function HomeTestimonial() {
  return (
    <div>
      <div className="overflow-hidden relative w-full flex flex-col bg-black py-[5px]">
        {/* Left to right scrolling testimonials */}
        <div className="whitespace-nowrap flex flex-row gap-[10px] items-center animate-[leftToRight_20s_linear_infinite] font-bold text-[60px] ">
          <span className="text-gray-300 mx-4 tracking-[1px]">
            TESTIMONIALS
          </span>
          <span className="text-transparent stroke-text mx-4 tracking-[3px]">
            TESTIMONIALS
          </span>
          <span className="text-gray-300 mx-4 tracking-[1px]">
            TESTIMONIALS
          </span>
          <span className="text-transparent stroke-text mx-4 tracking-[3px]">
            TESTIMONIALS
          </span>
          <span className="text-gray-300 mx-4 tracking-[1px]">
            TESTIMONIALS
          </span>
          <span className="text-transparent stroke-text mx-4 tracking-[3px]">
            TESTIMONIALS
          </span>
          <span className="text-gray-300 mx-4 tracking-[1px]">
            TESTIMONIALS
          </span>
          <span className="text-transparent stroke-text mx-4 tracking-[3px]">
            TESTIMONIALS
          </span>
          <span className="text-gray-300 mx-4 tracking-[1px]">
            TESTIMONIALS
          </span>
          <span className="text-transparent stroke-text mx-4 tracking-[3px]">
            TESTIMONIALS
          </span>
        </div>
        {/* Right to left scrolling testimonials */}
        <div className="whitespace-nowrap mt-[-20px] flex flex-row gap-[10px] items-center animate-[rightToLeft_20s_linear_infinite] font-bold text-[60px] ">
          <span className="text-transparent stroke-text mx-4 tracking-[3px]">
            TESTIMONIALS
          </span>
          <span className="text-gray-300 mx-4 tracking-[1px]">
            TESTIMONIALS
          </span>
          <span className="text-transparent stroke-text mx-4 tracking-[3px]">
            TESTIMONIALS
          </span>
          <span className="text-gray-300 mx-4 tracking-[1px]">
            TESTIMONIALS
          </span>
          <span className="text-transparent stroke-text mx-4 tracking-[3px]">
            TESTIMONIALS
          </span>
          <span className="text-gray-300 mx-4 tracking-[1px]">
            TESTIMONIALS
          </span>
          <span className="text-transparent stroke-text mx-4 tracking-[3px]">
            TESTIMONIALS
          </span>
          <span className="text-gray-300 mx-4 tracking-[1px]">
            TESTIMONIALS
          </span>
          <span className="text-transparent stroke-text mx-4 tracking-[3px]">
            TESTIMONIALS
          </span>
          <span className="text-gray-300 mx-4 tracking-[1px]">
            TESTIMONIALS
          </span>
        </div>
      </div>
      <HomeTestimonialContent />
    </div>
  );
}

export default HomeTestimonial;
