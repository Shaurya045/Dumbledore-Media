import React from "react";
import { img } from "../assets/assets";

function AboutStarted() {
  return (
    <div className="flex flex-row gap-[80px] px-[100px] pt-[50px] w-full">
      <div className="relative">
        <div className="w-[500px] h-[500px] bg-transparent border-[2px] border-[#A4A4A4] rounded-full "></div>
        <div className="w-full h-full absolute top-0 flex items-center justify-center">
          <div className="w-[450px] h-[450px] rounded-full overflow-hidden ">
            <img
              className="object-cover w-full h-full"
              src={img.sunny}
              alt="sunny"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] justify-center items-center w-full">
        <div>
          <div></div>
          <h2 className="text-white text-[20px] font-bold ">
            When we Started?
          </h2>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#A4A4A4] ">
            This passionate visionary from Patna, Bihar, Sunny Singh, has always
            been captivated by the power of storytelling. After years of working
            with leading agencies and gaining invaluable industry insights, he
            founded Dumbledore Media in 2024 to help brands connect
            authentically with their audiences.
          </p>
          <p className="text-[#A4A4A4] ">
            Sunny’s journey reflects the belief that great storytelling can
            transform businesses, and at Dumbledore Media, every project is an
            opportunity to weave a new tale.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutStarted;
