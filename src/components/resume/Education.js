import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E. in Software Engineering"
            subTitle="NCIT (2022 - Present)"
            des="Skills: Java · JavaScript · Cascading Style Sheets (CSS) · HTML · C++ · C (Programming Language) · DSA"
          />
          <ResumeCard
            title="+2"
            subTitle="Trinity International College (2020 - 2022)"
            des="Skills: C (Programming Language)"
          />
          <ResumeCard
            title="SEE"
            subTitle="Nobel Academy (2010 - 2020)"
            result="5.00/5"
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
};

export default Education;
