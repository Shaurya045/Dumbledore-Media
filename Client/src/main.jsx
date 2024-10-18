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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="services" element={<Services />} />
      <Route path="career" element={<Career />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
