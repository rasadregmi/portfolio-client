import React from 'react'

const ResumeCard = ({ title, subTitle, des, logo }) => {
  const parseContent = (description) => {
    if (!description) return { date: '', skills: [] };
    
    const parts = description.split('\n');
    const date = parts[0] || '';
    
    let skills = [];
    if (parts.length > 1) {
      skills = parts[1].split('·').map(skill => skill.trim()).filter(skill => skill);
    }
    
    return { date, skills };
  };
  
  const { date, skills } = parseContent(des);
  
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-green-400 duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-3 lgl:gap-4 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div className="flex items-center gap-4">
            {logo && (
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0">
                <img
                  src={logo}
                  alt="institution logo"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                {title}
              </h3>
              <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                {subTitle}
              </p>
            </div>
          </div>
        </div>
        
        {date && (
          <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 mb-1">
            {date}
          </p>
        )}
        
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-0">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 text-xs bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white rounded-full border border-green-500/30 font-medium hover:from-green-500/30 hover:to-blue-500/30 hover:shadow-md hover:translate-y-[-1px] transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeCard