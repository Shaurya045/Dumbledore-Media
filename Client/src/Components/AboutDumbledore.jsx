import React from "react";
import { img } from "../assets/assets";

function AboutDumbledore() {
  return (
    <div className="flex flex-row items-center gap-[80px] px-[100px] pt-[100px] w-full">
      <div className="flex flex-col gap-[20px] justify-center items-center w-full max-w-[60%]">
        <div>
          <div></div>
          <h2 className="text-white text-[20px] font-bold ">
            About Dumbledore Media
          </h2>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#A4A4A4] ">
            Dumbledore Media quickly established itself as a creative
            powerhouse, specializing in web and app development, 3D design,
            photography, videography, interior design, and VFX services. With a
            commitment to excellence and creativity, the agency has partnered
            with a diverse range of clients, from startups to established
            brands, crafting compelling narratives and innovative visual
            experiences. Our talented team of eight dedicated professionals
            brings a wealth of expertise across various departments, ensuring
            that every project we undertake is infused with creativity and
            precision.
          </p>
          <p className="text-[#A4A4A4] ">
            At Dumbledore Media, we believe that collaboration fuels innovation.
            Each team member is passionate about their craft, and together, we
            strive to deliver outstanding results that elevate our clients’
            brands. We understand the power of storytelling and are committed to
            helping our clients connect authentically with their audiences.
            Every project is an opportunity to weave a new tale, and we take
            pride in creating content that resonates and inspires.
          </p>
        </div>
      </div>
      <div className="w-[700px] ">
        <img className="w-full" src={img.Logo} alt="Dumbledore Media" />
      </div>
    </div>
  );
}

export default AboutDumbledore;
