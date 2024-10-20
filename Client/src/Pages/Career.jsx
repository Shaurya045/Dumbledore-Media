import React from "react";
import CareerAbout from "../Components/careerAbout";
import Careercareers from "../Components/Careercareers";
import CareerContact from "../Components/CareerContact";
import { Outlet } from "react-router-dom";

function Career() {
  return (
    <div className="bg-black py-[100px] flex flex-col items-center">
      <h1 className="text-white font-bold text-[35px] ">
        Work at DUMBLEDORE MEDIA!
      </h1>
      <CareerAbout />
      <Careercareers />
      <CareerContact />
    </div>
  );
}

export default Career;
