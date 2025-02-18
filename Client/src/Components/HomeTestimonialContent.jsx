"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Malvika Arora",
    title: "Marketing Communications Manager, PhonePe",
    testimonial:
      "OWLED Media is one of those rare agencies that actually make your work life easier! They go way beyond checking the basic boxes of resourceful, quality-driven, and creative - they are incredibly proactive and very thorough with every project. No task is small and the attention to detail is refreshing!",
    image: "https://link-to-image.jpg",
  },
  {
    name: "Shaurya",
    title: "Marketing Communications Manager, PhonePe",
    testimonial:
      "OWLED Media is one of those rare agencies that actually make your work life easier! They go way beyond checking the basic boxes of resourceful, quality-driven, and creative - they are incredibly proactive and very thorough with every project. No task is small and the attention to detail is refreshing!",
    image: "https://link-to-image.jpg",
  },
  // Add more testimonials here as objects with name, title, testimonial, image properties
];

function HomeTestimonialContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextTestimonial,
    onSwipedRight: prevTestimonial,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative min-h-[80vh] flex justify-center items-center bg-gradient-to-tr from-black from-50% via-red-900 via-90% to-sky-900 p-4 sm:p-6 md:p-8"
    >
      <button
        onClick={prevTestimonial}
        className="absolute left-2 sm:left-5 text-white text-2xl sm:text-4xl z-10 focus:outline-none"
        aria-label="Previous testimonial"
      >
        &#8249;
      </button>

      <div className="flex flex-col md:flex-row items-center md:space-x-8 max-w-6xl">
        {/* Left Section: Testimonial Content */}
        <div className="flex-1 text-white text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {testimonials[currentIndex].name}
          </h1>
          <h2 className="text-base sm:text-lg uppercase mt-2 font-semibold">
            {testimonials[currentIndex].title}
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed">
            {testimonials[currentIndex].testimonial}
          </p>
        </div>

        {/* Right Section: Testimonial Image */}
        <div className="flex-none">
          <img
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-full"
            src={testimonials[currentIndex].image || "/placeholder.svg"}
            alt={testimonials[currentIndex].name}
          />
        </div>
      </div>

      <button
        onClick={nextTestimonial}
        className="absolute right-2 sm:right-5 text-white text-2xl sm:text-4xl z-10 focus:outline-none"
        aria-label="Next testimonial"
      >
        &#8250;
      </button>

      {/* Swipe instruction for mobile */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm md:hidden">
        Swipe left or right to navigate
      </div>
    </div>
  );
}

export default HomeTestimonialContent;
