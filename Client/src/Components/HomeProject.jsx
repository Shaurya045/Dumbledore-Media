import { useState } from "react";
import HomeProject3D from "./HomeProject3D";
import HomeProjectWeb from "./HomeProjectWeb";
// import HomeProjectVFX from "./HomeProjectVFX";
import HomeProjectInterior from "./HomeProjectInterior";
import HomeProjectVideo from "./HomeProjectVideo";
import HomeProjectPhoto from "./HomeProjectPhoto";

function HomeProject() {
  const [showProject, setShowProject] = useState(1);
  return (
    <div className="bg-black pt-[20px] flex flex-col">
      <h1 className="text-white px-[40px] text-[40px] font-bold ">Projects</h1>
      <div className="grid grid-cols-[repeat(6,1fr)] my-[20px] px-[40px] gap-[10px]">
        <div
          onClick={() => setShowProject(1)}
          className={`${
            showProject === 1 ? "bg-white text-black" : ""
          } border-[#2e2e2e] border-[1px] rounded-[10px] hover:bg-white text-white hover:text-black text-[18px] font-semibold text-center py-[15px] cursor-pointer `}
        >
          Photography
        </div>
        <div
          onClick={() => setShowProject(2)}
          className={`${
            showProject === 2 ? "bg-white text-black" : ""
          } border-[#2e2e2e] border-[1px] rounded-[10px] hover:bg-white text-white hover:text-black text-[18px] font-semibold text-center py-[15px] cursor-pointer `}
        >
          Videography
        </div>
        <div
          onClick={() => setShowProject(3)}
          className={`${
            showProject === 3 ? "bg-white text-black " : ""
          } border-[#2e2e2e] border-[1px] rounded-[10px] hover:bg-white text-white hover:text-black text-[18px] font-semibold text-center py-[15px] cursor-pointer `}
        >
          Web/App Dev
        </div>
        <div
          onClick={() => setShowProject(4)}
          className={`${
            showProject === 4 ? "bg-white text-black" : ""
          } border-[#2e2e2e] border-[1px] rounded-[10px] hover:bg-white text-white hover:text-black text-[18px] font-semibold text-center py-[15px] cursor-pointer `}
        >
          3D
        </div>
        <div
          onClick={() => setShowProject(5)}
          className={`${
            showProject === 5 ? "bg-white text-black" : ""
          } border-[#2e2e2e] border-[1px] rounded-[10px] hover:bg-white text-white hover:text-black text-[18px] font-semibold text-center py-[15px] cursor-pointer `}
        >
          Interior Design
        </div>
        {/* <div
          onClick={() => setShowProject(3)}
          className={`${
            showProject === 3 ? "bg-white text-[#000000]" : ""
          } border-[#2e2e2e] border-[1px] rounded-[10px] hover:bg-white text-white hover:text-black text-[18px] font-semibold text-center py-[15px] cursor-pointer `}
        >
          VFX
        </div> */}
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
