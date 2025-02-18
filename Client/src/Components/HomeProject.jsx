import { useState } from "react";
import HomeProject3D from "./HomeProject3D";
import HomeProjectWeb from "./HomeProjectWeb";
// import HomeProjectVFX from "./HomeProjectVFX";
import HomeProjectInterior from "./HomeProjectInterior";
import HomeProjectVideo from "./HomeProjectVideo";
import HomeProjectPhoto from "./HomeProjectPhoto";

function HomeProject() {
  const [showProject, setShowProject] = useState(1);
  const tabs = [
    { id: 1, label: "Photography" },
    { id: 2, label: "Videography" },
    { id: 3, label: "Web/App Dev" },
    { id: 4, label: "3D" },
    { id: 5, label: "Interior Design" },
  ];
  return (
    <div className="bg-black pt-5 flex flex-col">
      <h1 className="text-white px-[40px] text-[40px] font-bold ">Projects</h1>
      <div className="px-[40px] flex flex-wrap justify-start my-5 gap-2 sm:gap-3 md:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setShowProject(tab.id)}
            className={`
              ${showProject === tab.id ? "bg-white text-black" : "text-white"}
              border border-[#2e2e2e] rounded-lg
              hover:bg-white hover:text-black
              text-sm sm:text-base md:text-lg font-semibold
              py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-5
              cursor-pointer transition-colors duration-200
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {showProject == 1 && <HomeProjectPhoto />}
      {showProject == 2 && <HomeProjectVideo />}
      {showProject == 3 && <HomeProjectWeb />}
      {showProject == 4 && <HomeProject3D />}
      {showProject == 5 && <HomeProjectInterior />}
      {/* {showProject == 6 && <HomeProjectVFX />} */}
    </div>
  );
}

export default HomeProject;
