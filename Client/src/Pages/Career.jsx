import CareerAbout from "../Components/careerAbout"
import Careercareers from "../Components/Careercareers"
import CareerContact from "../Components/CareerContact"
import { Outlet } from "react-router-dom"

function Career() {
  return (
    <div className="bg-black py-[110px] md:py-[115px] lg:py-[120px] flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12">
      <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 ">
        Work at DUMBLEDORE MEDIA!
      </h1>
      <div className="w-full max-w-4x">
        <CareerAbout />
        <Careercareers />
        <CareerContact />
      </div>
      <Outlet />
    </div>
  )
}

export default Career

