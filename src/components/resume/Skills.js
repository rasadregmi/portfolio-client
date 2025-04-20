import React from 'react'
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRobot, FaLaptopCode } from 'react-icons/fa';

const SkillCategory = ({ title, skills, icon }) => {
  return (
    <div className="bg-black bg-opacity-20 p-6 rounded-lg hover:bg-opacity-30 transition-all duration-300 shadow-shadowOne h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-black bg-opacity-25">
          <span className="text-green-500 text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="flex flex-col gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm text-gray-300 leading-relaxed flex items-start">
            <span className="text-green-500 mr-2 mt-0.5">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <FaCode />,
      skills: [
        "Full-stack applications using MERN stack and Next.js",
        "RESTful APIs with Node.js and Express.js",
        "Responsive design using HTML, CSS, and JavaScript"
      ]
    },
    {
      title: "Backend & Database",
      icon: <FaServer />,
      skills: [
        "MySQL and MongoDB database management",
        "Sequelize ORM for structured data operations",
        "Docker for containerization and deployment"
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <FaRobot />,
      skills: [
        "Python libraries: Pandas, NumPy, TensorFlow, Scikit-learn",
        "Applying ML models to real-world use cases"
      ]
    },
    {
      title: "Programming Languages",
      icon: <FaLaptopCode />,
      skills: [
        "Python, Java, C, C++",
        "Git and GitHub for version control and collaboration"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 pt-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={index === 4 ? "lg:col-span-3 md:col-span-2" : ""}
          >
            <SkillCategory 
              title={category.title} 
              skills={category.skills} 
              icon={category.icon}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills