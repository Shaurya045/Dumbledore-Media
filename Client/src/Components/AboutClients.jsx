import React from "react";
import { clientsPhoto } from "../assets/assets";

function AboutClients() {
  return (
    <div className="flex flex-col items-center gap-[40px] py-[100px] px-[100px]">
      <h1 className="text-white text-[40px] font-bold ">Clients</h1>
      <div className="flex flex-row items-center">
        <div className="w-[150px] h-[150px] flex items-center justify-center ">
          <img
            className="object-contain w-[75%] aspect-[3/2] "
            src={clientsPhoto.Artmis}
            alt="Artmis"
          />
        </div>
        <div className="w-[150px] h-[150px] flex items-center justify-center ">
          <img
            className="object-contain w-[100%] aspect-[3/2]"
            src={clientsPhoto.Artlet}
            alt="Artlet"
          />
        </div>
        <div className="w-[170px] h-[170px] flex items-center justify-center ">
          <img
            className="object-cover w-full h-full"
            src={clientsPhoto.Ecofacets}
            alt="Ecofacets"
          />
        </div>
        <div className="w-[150px] h-[150px] flex items-center justify-center ">
          <img
            className="object-cover w-full h-full"
            src={clientsPhoto.HiraPanna}
            alt="HiraPanna"
          />
        </div>
        <div className="w-[150px] h-[150px] flex items-center justify-center ">
          <img
            className="object-contain w-full h-full aspect-[3/2]"
            src={clientsPhoto.Ornate}
            alt="Ornate"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutClients;
