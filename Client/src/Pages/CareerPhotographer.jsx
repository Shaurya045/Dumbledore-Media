import React from "react";

function CareerPhotographer() {
  return (
    <div className="bg-black py-[100px] flex flex-col items-center">
      <div className="self-start px-[300px] mt-[50px] flex flex-col gap-[25px] ">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-white font-bold text-[25px] ">
            📸 Illuminating Image Conjurer (Photographer) | 1-3 Years of
            Experience
          </h2>
          <p className="text-[#A4A4A4] ">
            Master of capturing moments in time, turning fleeting glimpses into
            everlasting memories
          </p>
        </div>
        <p className="text-[#A4A4A4] text-[20px] ">
          🔥{" "}
          <span className="underline underline-offset-4">
            Click here to Apply
          </span>{" "}
          🔥
        </p>
        <p className="text-[#A4A4A4] text-[16px] ">
          We believe that every click of the shutter is a story waiting to be
          told. At Dumbledore Media, as an Illuminating Image Conjurer, you will
          wield your camera like a wand, creating visual spells that enchant our
          audiences.
        </p>
        <div className="text-[#A4A4A4] flex flex-col gap-[10px] ">
          <h2 className="font-bold text-[20px] ">The primary purpose of the role:</h2>
          <p>
            You are a visual storyteller: You have an eye for detail and can
            transform ordinary scenes into extraordinary narratives. You are a
            master of your craft, capturing the essence of a moment in every
            shot.
          </p>
          <h2 className="font-bold text-[20px] mt-[20px] ">Key Responsibilities:</h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px]">
            <li>
              Capture stunning photographs that reflect the essence of our
              clients' brands.
            </li>
            <li>
              Collaborate with creative teams to conceptualize and execute
              photoshoots.
            </li>
            <li>Edit and retouch images to perfection.</li>
            <li>Stay updated on photography trends and techniques.</li>
          </ul>
          <h2 className="font-bold text-[20px] mt-[20px] ">Key Requirements:</h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px] ">
            <li>
              1-3 years of experience as a photographer in a creative
              environment.
            </li>
            <li>
              Proficient in photo editing software (e.g., Adobe Photoshop,
              Lightroom).
            </li>
            <li>Strong portfolio showcasing your photographic skills.</li>
            <li>A passion for storytelling through images.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerPhotographer;
