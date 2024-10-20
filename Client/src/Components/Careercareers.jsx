import React from "react";
import { Link } from "react-router-dom";

function Careercareers() {
  return (
    <div className="self-start px-[300px] mt-[50px] flex flex-col gap-[40px] ">
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-white font-bold text-[25px] ">
          We Are Seeking Wizards for INTERNSHIP 🧙‍♂️
        </h2>
        <div className="text-[#A4A4A4] flex flex-col gap-[20px] ">
          <div className="flex flex-col">
            <Link to="photographer">
              <h3 className="font-bold text-[17px] ">
                📸 Illuminating Image Conjurer (Photographer) | 1-3 Years of
                Experience
              </h3>
            </Link>
            <p className="text-[15px] italic px-[25px] ">
              Master of capturing moments in time, turning fleeting glimpses
              into everlasting memories
            </p>
          </div>
          <div className="flex flex-col">
            <Link to="videographer">
              <h3 className="font-bold text-[17px] ">
                🎥 Sorcerer of Motion (Videographer) | 1-3 Years of Experience
              </h3>
            </Link>
            <p className="text-[15px] italic px-[25px] ">
              Caster of cinematic spells, crafting moving stories that captivate
              the audience 🎬
            </p>
          </div>
          <div className="flex flex-col">
            <Link to="vfx">
              <h3 className="font-bold text-[17px] ">
                ✨ Visual Effects Enchanter (VFX Artist) | 1-3 Years of
                Experience
              </h3>
            </Link>
            <p className="text-[15px] italic px-[25px] ">
              Architect of illusions, bringing extraordinary visions to life
              with magical effects ✨
            </p>
          </div>
          <div className="flex flex-col">
            <Link to="3d">
              <h3 className="font-bold text-[17px] ">
                🧙‍♂️ Three-Dimensional Artificer (3D Designer) | 0-2 Years of
                Experience
              </h3>
            </Link>
            <p className="text-[15px] italic px-[25px] ">
              Creator of fantastical realms, conjuring designs that leap off the
              page and into reality 🪄
            </p>
          </div>
          <div className="flex flex-col">
            <Link to="web">
              <h3 className="font-bold text-[17px] ">
                💻 Web Wizard | 0-2 Years of Experience
              </h3>
            </Link>
            <p className="text-[15px] italic px-[25px] ">
              Master of the digital realm, weaving spells of code to create
              enchanting websites 🌐
            </p>
          </div>
          <div className="flex flex-col">
            <Link to="app">
              <h3 className="font-bold text-[17px] ">
                📱 App Alchemist (App Developer) | 0-2 Years of Experience
              </h3>
            </Link>
            <p className="text-[15px] italic px-[25px] ">
              Potion master of mobile magic, crafting applications that enhance
              the wizarding experience 📲
            </p>
          </div>
          <div className="flex flex-col">
            <Link to="interior">
              <h3 className="font-bold text-[17px] ">
                🏰 Interior Design Sorceress/Sorcerer | 1-3 Years of Experience
              </h3>
            </Link>
            <p className="text-[15px] italic px-[25px] ">
              Guardian of enchanting spaces, transforming ordinary environments
              into magical havens 🏡
            </p>
          </div>
        </div>
        <p className="text-[#A4A4A4] mt-[30px] ">
          We’re offering magical compensation, far beyond ordinary Muggle
          standards. 🏆 Your job may begin remotely and stay flexible depending
          on your role and preference.
        </p>
      </div>
    </div>
  );
}

export default Careercareers;
