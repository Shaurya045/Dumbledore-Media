import React from "react";
import { teamsPhoto } from "../assets/assets";

function AboutTeams() {
  return (
    <div className="flex flex-col items-center gap-[40px] pt-[100px] px-[100px]">
      <h1 className="text-white text-[40px] font-bold ">Our Wizards</h1>
      <div className="flex flex-col gap-[20px] items-center ">
        <div className="w-[270px] h-[320px] bg-white relative ">
          <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
            <h3 className="text-white text-[15px] font-semibold px-[20px]">
              Sunny Singh
            </h3>
            <h3 className="text-white text-[13px] font-light px-[20px]">
              Headmaster & CEO
            </h3>
          </div>
          <img
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300 "
            src={teamsPhoto.sunny}
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
                Web Wizard
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300 "
              src={teamsPhoto.shaurya}
              alt="founder"
            />
          </div>
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Aditya Singh
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                Interior Design Sorcerer
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={teamsPhoto.sunny}
              alt="founder"
            />
          </div>
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Swapnil
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                3D Motion Graphics Artisan
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={teamsPhoto.sunny}
              alt="founder"
            />
          </div>
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Prakash
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                Creative Conjurer
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={teamsPhoto.sunny}
              alt="founder"
            />
          </div>
        </div>
        <div className="flex flex-row gap-[20px]">
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Rishi
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                Marketing Sorcerer
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={teamsPhoto.sunny}
              alt="founder"
            />
          </div>
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Sandeep Singh
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                Visual Effects Enchanter
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={teamsPhoto.sunny}
              alt="founder"
            />
          </div>
          <div className="w-[270px] h-[320px] bg-white relative ">
            <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10 ">
              <h3 className="text-white text-[15px] font-semibold px-[20px]">
                Swarn pratap Singh
              </h3>
              <h3 className="text-white text-[13px] font-light px-[20px]">
                UI/UX Alchemist
              </h3>
            </div>
            <img
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              src={teamsPhoto.swarn}
              alt="founder"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeams;
