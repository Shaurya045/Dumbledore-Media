import React from "react";
import { img } from "../assets/assets";

function AboutTeams() {
  return (
    <div className="flex flex-col items-center gap-[40px] pt-[100px] px-[100px]">
      <h1 className="text-white text-[40px] font-bold ">
        Team Members
      </h1>
      <div className="flex flex-col gap-[20px] items-center ">
        <div className="w-[270px] h-[320px] bg-white relative ">
          <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
            <h3 className="text-white text-[15px] font-semibold px-[20px]">
              Sunny Singh
            </h3>
            <h3 className="text-white text-[13px] font-light px-[20px]">
              Founder & CEO
            </h3>
          </div>
          <img
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300 "
            src={img.sunny}
            alt="founder"
          />
        </div>
        <div className="flex flex-row gap-[20px]">
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Shaurya Pratap Singh
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                Web Developer
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300 "
              src={img.sunny}
              alt="founder"
            />
          </div>
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Aditya Singh
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                Interior Designer
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={img.sunny}
              alt="founder"
            />
          </div>
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Swapnil
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                3D Motion Graphics Designer
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={img.sunny}
              alt="founder"
            />
          </div>
        </div>
        <div className="flex flex-row gap-[20px]">
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Prakash
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                Creative Designer
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={img.sunny}
              alt="founder"
            />
          </div>
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Rishi
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                Marketing Specialist
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={img.sunny}
              alt="founder"
            />
          </div>
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Sandeep Singh
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                VFX Artist
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={img.sunny}
              alt="founder"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeams;
