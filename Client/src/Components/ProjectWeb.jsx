import { PinContainer } from "@/Components/ui/3d-pin";
import { projectWeb } from "@/assets/assets";

function ProjectWeb() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pt-[50px] pb-[150px]  bg-zinc-950 ">
      <div className="flex justify-center w-full">
        <PinContainer title="madhavori" href="https://www.madhavori.com/">
          <div className="flex  flex-col p-4 tracking-tight text-slate-100/50 w-[280px] sm:w-[20rem] h-[280px] sm:h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm sm:text-base text-slate-100">
              Madhavori
            </h3>
            <div className="text-sm sm:text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">Tour and Travel Website.</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
              <img
                src={projectWeb.madhavori || "/placeholder.svg"}
                alt="Madhavori website"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </PinContainer>
      </div>

      <div className="flex justify-center w-full">
        <PinContainer
          title="ornatemakeupstudio"
          href="https://www.ornatemakeup.com/"
        >
          <div className="flex  flex-col p-4 tracking-tight text-slate-100/50 w-[280px] sm:w-[20rem] h-[280px] sm:h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm sm:text-base text-slate-100">
              Ornate Makeup Studio
            </h3>
            <div className="text-sm sm:text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Website for the makeup studio and academy.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
              <img
                src={projectWeb.ornate || "/placeholder.svg"}
                alt="Ornate Makeup Studio website"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </PinContainer>
      </div>

      <div className="flex justify-center w-full">
        <PinContainer
          title="dumbledoremedia"
          href="https://www.dumbledoremedia.com/"
        >
          <div className="flex  flex-col p-4 tracking-tight text-slate-100/50 w-[280px] sm:w-[20rem] h-[280px] sm:h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm sm:text-base text-slate-100">
              Dumbledore Media
            </h3>
            <div className="text-sm sm:text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Our own website showing our services, packages, project, etc.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
              <img
                src={projectWeb.dumbledoremedia || "/placeholder.svg"}
                alt="Dumbledore Media website"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}

export default ProjectWeb;
