import React from "react";

function CareerWeb() {
  return (
    <div className="bg-black py-[100px] flex flex-col items-center">
      <div className="self-start px-[300px] mt-[50px] flex flex-col gap-[25px] ">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-white font-bold text-[25px] ">
            💻 Web Wizard | 0-2 Years of Experience
          </h2>
          <p className="text-[#A4A4A4] ">
            Master of the digital realm, weaving spells of code to create
            enchanting websites 🌐
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
          As a Web Wizard at Dumbledore Media, you will create magical digital
          experiences that engage and delight users, crafting websites that are
          as enchanting as they are functional.
        </p>
        <div className="text-[#A4A4A4] flex flex-col gap-[10px] ">
          <h2 className="font-bold text-[20px] ">
            The primary purpose of the role:
          </h2>
          <p>
            You are a coding sorcerer: A skilled developer who crafts enchanting
            websites with a focus on user experience, bringing creativity and
            functionality together.
          </p>
          <h2 className="font-bold text-[20px] mt-[20px] ">
            Key Responsibilities:
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px]">
            <li>
              Develop and maintain websites using HTML, CSS, and JavaScript.
            </li>
            <li>Collaborate with designers to bring their visions to life.</li>
            <li>Optimize websites for speed and performance.</li>
            {/* <li>Stay updated on photography trends and techniques.</li> */}
          </ul>
          <h2 className="font-bold text-[20px] mt-[20px] ">
            Key Requirements:
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-[5px] ">
            <li>0-2 years of experience in web development.</li>
            <li>
              Proficiency in front-end web technologies (HTML, CSS, JavaScript).
            </li>
            <li>A portfolio showcasing your web projects.</li>
            <li>A passion for creating seamless digital experiences.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerWeb;
