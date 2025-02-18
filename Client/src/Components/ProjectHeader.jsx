import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";

function ProjectHeader() {
  return (
    <div className="h-96 z-0 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-00 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-5xl font-bold text-xl text-white relative z-20")}>
        PROJECTS
      </h1>
      {/* <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p> */}
    </div>
  );
}

export default ProjectHeader;
