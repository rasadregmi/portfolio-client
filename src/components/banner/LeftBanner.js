import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaReact, FaInstagramSquare, FaNode } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["AI Enthusiast", "Developer.", "Software Engineering Student."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-indigo-500 capitalize">Rasad Regmi</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span className="text-orange-300">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I have a strong interest in full-stack development, cloud solutions, and working on projects that solve real-world problems.
          I bring my skills in problem-solving, and teamwork to every challenge.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/rasad.regmi" target="blank">
              <span className="bannerIcon" >
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.instagram.com/regmi_rasad/" target="blank">
            <span className="bannerIcon">
              <FaInstagramSquare />
            </span>
            </a>
            <a href="https://www.linkedin.com/in/rasad-regmi/" target="blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNode />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner