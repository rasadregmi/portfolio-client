import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
    <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <h2 className="text-3xl md:text-2x2 font-sans leading-relaxed">Although I do not have formal work experience, my academic coursework and personal projects have equipped me with valuable skills and knowledge. I have a solid foundation in web development, particularly in the MERN stack (MongoDB, Express.js, React, Node.js). I also participated in MBMC IdeaX 2024, where my team (i.e. Team Aegis) and I developed a project called Scam Review Aggregator. Through this project, I gained experience in full-stack development using MERN stack, collaborated with a team to solve real-world problems, and learned to work effectively under time constraints.</h2>
    </div>
    </motion.div>
  );
};

export default Experience;
