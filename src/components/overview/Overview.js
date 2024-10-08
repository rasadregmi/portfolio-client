import React from 'react';
import { FaDatabase, FaCloud } from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";
import { SiWebmoney } from "react-icons/si";
import { MdHighQuality } from "react-icons/md";
import Title from '../layouts/Title';
import Card from './Card';

const Overview = () => {
  return (
    <section
      id="overview"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
      <Title title="Areas of Focus" des="Overview" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="I can contribute as a founder executive, to defining and refining business strategies. I can also leverage my technical 
          background to align product vision with market needs and ensure effective execution of ideas."
          icon={<IoBusinessSharp />}         
        />
        <Card
          title="Web Development"
          des="I am skilled in building complete web applications using the MERN stack. From backend APIs to responsive frontends, 
          I handle every part of the development process to deliver functional projects."
          icon={<SiWebmoney />}
        />
        <Card
          title="Project Collaboration"
          des="As an active team player, I have contributed to various projects, collaborating in roles like frontend and backend development.
           My teamwork skills help in driving projects to success with efficiency and coordination."
          icon={<VscProject />}
        />
        <Card
          title="Database Management"
          des="I use MongoDB to design, manage, and optimize databases. I ensure data consistency and scalability, allowing applications to 
          store and retrieve information efficiently."
          icon={<FaDatabase />}
        />
        <Card
          title="Quality Assurance"
          des="I am currently in the learning phase of Quality Assurance (QA). I am developing skills in testing processes, ensuring 
          software reliability, and identifying and fixing issues to improve overall product quality."
          icon={<MdHighQuality />}
        />
        <Card
          title="Cloud Solutions"
          des="I am exploring cloud computing, focusing on solutions like AWS. I am building skills to develop scalable, reliable 
          cloud-based applications to meet modern deployment problems and solve it."
          icon={<FaCloud />}
        />
      </div>
    </section>
  );
}

export default Overview