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
        <p className="text-base md:text-lg font-sans leading-relaxed">
          Although I do not have formal work experience, my academic coursework and personal projects have equipped me with valuable skills and knowledge. I have a solid foundation in <strong>web development</strong>, particularly in the <strong>MERN stack & Next.js</strong>.
        </p>
        <p className="text-base md:text-lg font-sans leading-relaxed">
          I have actively participated in <strong>MBMC IdeaX 2024</strong>, <strong>Orbit Engineering Hacks 2024</strong>, and <strong>Noskathon Lite 2024</strong>, where my team (Team Aegis) and I developed several projects. Through these experiences, I gained hands-on expertise in <strong>full-stack development</strong> and <strong>AI/ML</strong>, collaborated with a team to solve real-world problems, and learned to work effectively under time constraints.
        </p>
        <p className="text-base md:text-lg font-sans leading-relaxed">
          Additionally, I contributed to <strong>ClassLens</strong>, an AI-powered classroom attentiveness monitoring system that analyzes student engagement using <strong>machine learning</strong>, and <strong>Traffic Dai</strong>, a real-time <strong>traffic-based travel assistant</strong> optimized for Nepal’s unique road conditions. These experiences have strengthened my <strong>problem-solving abilities, teamwork, and proficiency</strong> in <strong>Python, Java, C++, and ML frameworks (TensorFlow, Scikit-learn)</strong>.
        </p>
      </div>
    </motion.div> 
  );
};

export default Experience;
