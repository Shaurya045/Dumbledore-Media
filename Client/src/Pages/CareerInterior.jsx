import React from "react";

function CareerInterior() {
  return (
    <div className="bg-black py-[100px] flex flex-col items-center">
      <div className="self-start px-[300px] mt-[50px] flex flex-col gap-[25px] ">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-white font-bold text-[25px] ">
            🏰 Interior Design Sorceress/Sorcerer | 1-3 Years of Experience
          </h2>
          <p className="text-[#A4A4A4] ">
            Guardian of enchanting spaces, transforming ordinary environments
            into magical havens 🏡
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
          At Dumbledore Media, we believe that every space has a story waiting
          to be told. As an Interior Design Sorceress/Sorcerer, you will craft
          enchanting environments that inspire and captivate, making every
          project a unique experience.
        </p>
        <div className="text-[#A4A4A4] flex flex-col gap-[10px] ">
          <h2 className="font-bold text-[20px] ">
            The primary purpose of the role:
          </h2>
          <p>
            You are a space conjurer: A creative individual with an eye for
            aesthetics, capable of transforming ordinary environments into
            extraordinary experiences through thoughtful design and decor.
          </p>
          <h2 className="font-bold text-[20px] mt-[20px] ">
            Key Responsibilities:
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px]">
            <li>
              Conceptualize and design interior spaces that align with client
              visions and brand identities.
            </li>
            <li>
              Collaborate with clients and teams to understand project
              requirements and objectives.
            </li>
            <li>
              Create detailed design plans, including layouts, color schemes,
              and material selections.
            </li>
            <li>Stay updated on interior design trends and innovations.</li>
          </ul>
          <h2 className="font-bold text-[20px] mt-[20px] ">
            Key Requirements:
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px] ">
            <li>
              1-3 years of experience in interior design or a related field.
            </li>
            <li>
              Strong portfolio showcasing your design projects and aesthetic
              sensibilities.
            </li>
            <li>
              Proficiency in design software (e.g., AutoCAD, SketchUp, Adobe
              Creative Suite).
            </li>
            <li>A passion for creating beautiful, functional spaces..</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerInterior;
