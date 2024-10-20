import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Services from "./Pages/Services.jsx";
import Career from "./Pages/Career.jsx";
import Contact from "./Pages/Contact.jsx";
import CareerPhotographer from "./Pages/CareerPhotographer.jsx";
import CareerVideographer from "./Pages/CareerVideographer.jsx";
import CareerVFX from "./Pages/CareerVFX.jsx";
import Career3D from "./Pages/Career3D.jsx";
import CareerWeb from "./Pages/CareerWeb.jsx";
import CareerApp from "./Pages/CareerApp.jsx";
import CareerInterior from "./Pages/CareerInterior.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="services" element={<Services />} />
      <Route path="career" element={<Career />} />
      <Route path="career/photographer" element={<CareerPhotographer />} />
      <Route path="career/videographer" element={<CareerVideographer />} />
      <Route path="career/vfx" element={<CareerVFX />} />
      <Route path="career/3d" element={<Career3D />} />
      <Route path="career/web" element={<CareerWeb />} />
      <Route path="career/app" element={<CareerApp />} />
      <Route path="career/interior" element={<CareerInterior />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
