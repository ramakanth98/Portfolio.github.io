import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-4 lg:mb-36">
      <div className="flex flex-col items-center text-center">
        <motion.h2
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-4 sm:pb-6 lg:pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight"
        >
          Experience
        </motion.h2>
        
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="my-4 sm:my-6 max-w-4xl py-4 sm:py-6"
        >
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              className="mb-8 last:mb-0 bg-neutral-800/30 rounded-xl p-6 border border-neutral-700/50"
            >
              <div className="text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                      {experience.role}
                    </h3>
                    <p className="text-lg sm:text-xl text-purple-300 mb-2">
                      {experience.company}
                    </p>
                    <p className="text-base sm:text-lg text-neutral-400 mb-4">
                      {experience.year}
                    </p>
                  </div>
                </div>
                
                <div className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
                  {experience.description.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-neutral-700/50 text-neutral-300 text-sm rounded-full border border-neutral-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
