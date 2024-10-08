import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Ranked #1 in Second Semester at Pokhara University"
            subTitle="Issued by Nepal College of Information Technology · Jun 2024"
            result="Success"
            des="I achieved the prestigious honor of securing the 1st Rank in my second semester at Pokhara University. This accolade is a testament to my dedication and academic excellence. The certificate, awarded by Nepal College of Information Technology (NCIT), recognizes my distinction as the top performer in both my college and university. I am deeply honored by this acknowledgment and remain committed to maintaining high academic standards and continuing my pursuit of knowledge."
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
