import { OPEN_SOURCE, HACKATHON_JUDGING } from "../constants";
import { motion } from "framer-motion";

const OpenSource: React.FC = () => {
  const handleRepoClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
          Open Source & Community
        </motion.h2>
        
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="my-4 sm:my-6 max-w-4xl py-4 sm:py-6"
        >
          {/* Open Source Contributions */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8 text-center text-purple-300"
            >
              ProgramEarth Contributions
            </motion.h3>
            
            {OPEN_SOURCE.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                className="mb-8 last:mb-0 bg-neutral-800/30 rounded-xl p-6 border border-neutral-700/50"
              >
                <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  {org.name}
                </h4>
                <p className="text-base sm:text-lg text-neutral-300 mb-4 leading-relaxed">
                  {org.description}
                </p>
                
                <div className="space-y-4">
                  {org.projects.map((project, pIndex) => (
                    <div key={pIndex} className="bg-neutral-700/30 rounded-lg p-4 border border-neutral-600/50">
                      <h5 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2">
                        {project.title}
                      </h5>
                      <p className="text-base text-neutral-300 mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <button
                        onClick={() => handleRepoClick(project.repo)}
                        className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 text-sm sm:text-base"
                      >
                        View Repository
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Hackathon Judging */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8 text-center text-purple-300"
            >
              Hackathon Judge & Mentor
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-700/50"
            >
              <p className="text-base sm:text-lg text-neutral-300 mb-6 leading-relaxed">
                {HACKATHON_JUDGING.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {HACKATHON_JUDGING.events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-neutral-700/30 rounded-lg p-4 border border-neutral-600/50 text-center"
                  >
                    <h5 className="text-lg font-semibold text-purple-300 mb-2">
                      {event.name}
                    </h5>
                    <p className="text-sm text-neutral-400">
                      {event.location}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OpenSource;
