import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

// Import the experience logo images
import yuwasoftLogo from "../../assets/images/experience/yuwasoft_logo.jpeg";
import ssrcLogo from "../../assets/images/experience/ssrc_logo.jpeg";
import esatyaLogo from "../../assets/images/experience/esatya_logo.png";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Back End Developer"
            subTitle="Yuwasoft Technologies Pvt. Ltd. · Internship"
            des={`Mar 2025 - Present \nNode.js · Express.js · Docker · Sequelize.js · Data Migration · MySQL · API Development`}
            logo={yuwasoftLogo}
          />
          <ResumeCard
            title="Blockchain Fellow"
            subTitle="eSatya"
            des={`Apr 2025 - Aug 2025 \nBlockchain · Cryptography · Ethereum · Solidity · Smart Contracts · Decentralized Applications (DApps) · Off-Chain Data Storage Solutions`}
            logo={esatyaLogo}
          />
          <ResumeCard
            title="Data Science Fellow"
            subTitle="Sunway Student Representative Council · Apprenticeship"
            des={`Jan 2025 - Aug 2025 \nData Science · Supervised Learning · Unsupervised Learning · Git · GitHub`}
            logo={ssrcLogo}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
