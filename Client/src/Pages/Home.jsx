import React from "react";
import HomeHeader from "../Components/HomeHeader";
import HomeProject from "../Components/HomeProject";
import HomeService from "../Components/HomeService";
import HomeTestimonial from "../Components/HomeTestimonial";

function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeProject />
      <HomeService />
      <HomeTestimonial />
    </div>
  );
}

export default Home;
