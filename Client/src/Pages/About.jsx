import React from "react";
import AboutStarted from "../Components/AboutStarted";
import AboutDumbledore from "../Components/AboutDumbledore";
import AboutTeams from "../Components/AboutTeams";
import AboutClients from "../Components/AboutClients";

function About() {
  return (
    <div className="bg-black pt-[100px]">
      {/* <h1 className="text-white">About</h1> */}
      <AboutStarted />
      <AboutDumbledore />
      <AboutTeams />
      <AboutClients />
    </div>
  );
}

export default About;
