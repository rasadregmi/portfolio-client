import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Overview from "./components/overview/Overview";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Overview />
        <Projects />
        <Resume />
        <Contact />
        <FooterBottom />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
