import React from "react";

function CareerVFX() {
  return (
    <div className="bg-black py-[100px] flex flex-col items-center">
      <div className="self-start px-[300px] mt-[50px] flex flex-col gap-[25px] ">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-white font-bold text-[25px] ">
            ✨ Visual Effects Enchanter (VFX Artist) | 1-3 Years of Experience
          </h2>
          <p className="text-[#A4A4A4] ">
            Architect of illusions, bringing extraordinary visions to life with
            magical effects ✨
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
          As a Visual Effects Enchanter at Dumbledore Media, you will craft
          enchanting effects that elevate our storytelling to new heights,
          adding magic to every frame.
        </p>
        <div className="text-[#A4A4A4] flex flex-col gap-[10px] ">
          <h2 className="font-bold text-[20px] ">
            The primary purpose of the role:
          </h2>
          <p>
            You are a wizard of visual effects: A creative individual who can
            transform ideas into mesmerizing visuals that captivate audiences
            and enhance narratives.
          </p>
          <h2 className="font-bold text-[20px] mt-[20px] ">
            Key Responsibilities:
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px]">
            <li>Create and integrate visual effects for video content.</li>
            <li>
              Collaborate with directors and producers to achieve the desired
              aesthetic.
            </li>
            <li>Stay updated on VFX trends and techniques.</li>
            {/* <li>Stay updated on photography trends and techniques.</li> */}
          </ul>
          <h2 className="font-bold text-[20px] mt-[20px] ">
            Key Requirements:
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px] ">
            <li>1-3 years of experience in visual effects production.</li>
            <li>Proficient in VFX software (e.g., After Effects, Nuke).</li>
            <li>Strong portfolio showcasing your VFX work</li>
            <li>A passion for creating magical visuals.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerVFX;
