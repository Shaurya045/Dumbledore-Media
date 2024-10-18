import React, { useState } from "react";

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

  return (
    <div className="relative h-[80vh] flex justify-center items-center bg-gradient-to-tr from-black from-50% via-red-900 via-90% to-sky-900 p-8">
      <button
        onClick={prevTestimonial}
        className="absolute left-5 text-white text-4xl z-10 focus:outline-none"
      >
        &#8249;
      </button>

      <div className="flex items-center space-x-8 max-w-6xl">
        {/* Left Section: Testimonial Content */}
        <div className="flex-1 text-white">
          <h1 className="text-5xl font-bold">
            {testimonials[currentIndex].name}
          </h1>
          <h2 className="text-lg uppercase mt-2 font-semibold">
            {testimonials[currentIndex].title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            {testimonials[currentIndex].testimonial}
          </p>
        </div>

        {/* Right Section: Testimonial Image */}
        <div className="flex-none">
          <img
            className="w-64 h-64 object-cover rounded-full"
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
          />
        </div>
      </div>

      <button
        onClick={nextTestimonial}
        className="absolute right-5 text-white text-4xl z-10 focus:outline-none"
      >
        &#8250;
      </button>
    </div>
  );
}

export default HomeTestimonialContent;
