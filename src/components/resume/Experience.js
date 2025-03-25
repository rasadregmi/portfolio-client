import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="py-20 font-titleFont flex flex-col gap-6 items-center">
        <p className="text-lg md:text-xl font-sans leading-relaxed font-semibold text-gray-200">
          Updating soon...
        </p>
      </div>
    </motion.div> 
  );
};

export default Experience;
