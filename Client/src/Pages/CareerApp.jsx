import React from "react";

function CareerApp() {
  return (
    <div className="bg-black py-[100px] flex flex-col items-center">
      <div className="self-start px-[300px] mt-[50px] flex flex-col gap-[25px] ">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-white font-bold text-[25px] ">
            📱 App Alchemist | 0-2 Years of Experience
          </h2>
          <p className="text-[#A4A4A4] ">
            Craftsman of mobile magic, conjuring applications that delight and
            engage users 📲
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
          As an App Alchemist at Dumbledore Media, you will develop captivating
          mobile applications that enchant users, blending creativity and
          technology in every project.
        </p>
        <div className="text-[#A4A4A4] flex flex-col gap-[10px] ">
          <h2 className="font-bold text-[20px] ">
            The primary purpose of the role:
          </h2>
          <p>
            You are a mobile maestro: A developer who creates engaging
            applications that provide exceptional user experiences, merging
            functionality and aesthetics seamlessly.
          </p>
          <h2 className="font-bold text-[20px] mt-[20px] ">
            Key Responsibilities:
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px]">
            <li>
              Develop and maintain mobile applications for iOS and Android
              platforms.
            </li>
            <li>
              Collaborate with designers to create user-friendly interfaces.
            </li>
            <li>
              Test and optimize applications for performance and usability.
            </li>
            {/* <li>Stay updated on photography trends and techniques.</li> */}
          </ul>
          <h2 className="font-bold text-[20px] mt-[20px] ">
            Key Requirements:
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px] ">
            <li>0-2 years of experience in mobile app development.</li>
            <li>
              Proficiency in programming languages (e.g., Java, Swift, React
              Native).
            </li>
            <li>A portfolio showcasing your mobile projects.</li>
            <li>A passion for crafting innovative mobile solutions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerApp;
