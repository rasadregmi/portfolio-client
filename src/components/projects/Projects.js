import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="View My Work and Share Thoughts"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Java - CRUD App"
          des="Completed a Java software project using JDBC, MySQL, and Servlets, showcasing my backend development skills in database connectivity and management."
          src={projectOne}
          githubLink="https://github.com/rasadregmi/Java-Project"
        />
        <ProjectsCard
          title="Weather Forecast"
          des="Developed a React app that retrieves real-time weather data, displaying weather conditions based on user-inputted city names, with a smooth UI experience."
          src={projectTwo}
          githubLink="https://github.com/rasadregmi/Weather-Forecast"
          liveLink="https://rasadregmi.github.io/Weather-Forecast/"
        />
        <ProjectsCard
          title="Password Generator"
          des="Built a React-based password generator that allows users to create secure passwords with customizable criteria like length, symbols, etc. with an option to copy to clipboard."
          src={projectThree}
          githubLink="https://github.com/rasadregmi/Password-Generator"
          liveLink="https://rasadregmi.github.io/Password-Generator/"
        />
        <ProjectsCard
          title="Scam Aggregator"
          des="Scam Aggregator is a platform where users report scams and fraudulent activities.  By consolidating reports, it builds a database to raise awareness and protect individuals"
          src={projectFour}
          githubLink="https://github.com/rasadregmi/scam"
        />
        <ProjectsCard
          title="ClassLens"
          des="ClassLens is an AI-powered tool that analyzes classroom images to assess student attentiveness, helping educators improve engagement."
          src={projectFive}
          githubLink="https://github.com/rasadregmi/ClassLens"
        />
        <ProjectsCard
          title="ClassCam (ClassLens 2.0)"
          des="ClassCam is a real-time system that uses computer vision and deep learning to monitor student attentiveness by detecting behaviors like reading, writing, hand-raising, and focus."
          src={projectSix}
          githubLink="https://github.com/rasadregmi/ClassCam"
        />
        <ProjectsCard
          title="RaiseOnChain"
          des="RaiseOnChain is a decentralized crowdfunding platform that ensures transparency, security, and global access by recording every donation and campaign on-chain."
          src={projectSeven}
          githubLink="https://github.com/rasadregmi/RaiseOnChain"
          liveLink="https://raise-on-chain-h6cd.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
