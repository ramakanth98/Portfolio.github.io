import { EXPERIENCES, Experience as ExperienceType } from "../constants";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 sm:my-16 lg:my-20 text-center text-3xl sm:text-4xl lg:text-5xl font-light"
      >
        Experience
      </motion.h2>
      
      <div className="space-y-8 lg:space-y-12">
        {EXPERIENCES.map((experience: ExperienceType, index: number) => (
          <motion.div 
            key={index} 
            className="flex flex-col lg:flex-row lg:justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Year section */}
            <motion.div
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg sm:text-xl text-neutral-400 font-medium text-center lg:text-left">
                {experience.year}
              </p>
            </motion.div>
            
            {/* Content section */}
            <motion.div
              className="w-full lg:w-3/4 lg:pl-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <h6 className="mb-3 text-lg sm:text-xl lg:text-2xl font-semibold text-center lg:text-left">
                  {experience.role} -{" "}
                  <span className="text-purple-300">
                    {experience.company}
                  </span>
                </h6>
                
                <p className="mb-6 text-sm sm:text-base text-neutral-300 leading-relaxed text-center lg:text-left">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs sm:text-sm font-medium text-purple-400 bg-neutral-800 rounded-full border border-neutral-700 hover:border-purple-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
