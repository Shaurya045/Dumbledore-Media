import React from "react";

function CareerVideographer() {
  return (
    <div className="bg-black py-[100px] flex flex-col items-center">
      <div className="self-start px-[300px] mt-[50px] flex flex-col gap-[25px] ">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-white font-bold text-[25px] ">
            🎥 Sorcerer of Motion (Videographer) | 1-3 Years of Experience
          </h2>
          <p className="text-[#A4A4A4] ">
            Caster of cinematic spells, crafting moving stories that captivate
            the audience 🎬
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
          At Dumbledore Media, we believe in the power of moving images to tell
          compelling stories. As a Sorcerer of Motion, your videos will bring
          narratives to life and enchant viewers across the globe.
        </p>
        <div className="text-[#A4A4A4] flex flex-col gap-[10px] ">
          <h2 className="font-bold text-[20px] ">
            The primary purpose of the role:
          </h2>
          <p>
            You are a visual storyteller: A creative mind who transforms
            concepts into captivating visual narratives that resonate with
            audiences.
          </p>
          <h2 className="font-bold text-[20px] mt-[20px] ">
            Key Responsibilities:
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px]">
            <li>Shoot and edit video content for various platforms.</li>
            <li>
              Collaborate with the creative team to develop compelling
              storylines.
            </li>
            <li>Stay updated on video production techniques and trends.</li>
            {/* <li>Stay updated on photography trends and techniques.</li> */}
          </ul>
          <h2 className="font-bold text-[20px] mt-[20px] ">
            Key Requirements:
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px] ">
            <li>1-3 years of experience in videography or video production.</li>
            <li>
              Proficient in video editing software (e.g., Adobe Premiere Pro,
              Final Cut Pro).
            </li>
            <li>A strong portfolio of your video work.</li>
            <li>A passion for storytelling through video.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerVideographer;
