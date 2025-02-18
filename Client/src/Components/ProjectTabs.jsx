import { useState } from "react";
import ProjectWeb from "./ProjectWeb";
import ProjectPhoto from "./ProjectPhoto";
import ProjectVideo from "./ProjectVideo";

function ProjectTabs() {
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
      <div className="flex flex-wrap justify-center my-5 px-4 gap-2 sm:gap-3 md:gap-4">
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
      <div className="mt-4">
        {showProject === 1 && <ProjectPhoto />}
        {showProject === 2 && <ProjectVideo />}
        {showProject === 3 && <ProjectWeb />}
        {/* Uncomment and implement these components when ready */}
        {/* {showProject === 4 && <HomeProject3D />} */}
        {/* {showProject === 5 && <HomeProjectInterior />} */}
      </div>
    </div>
  );
}

export default ProjectTabs;
