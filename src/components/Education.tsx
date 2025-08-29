import { EDUCATION, CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
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
      <div className="flex flex-col">
        {/* Education */}
        <div className="w-full mb-12">
          <div className="flex flex-col items-center text-center">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 sm:pb-6 lg:pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight"
            >
              Education
            </motion.h2>
            
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-4 sm:my-6 max-w-4xl py-4 sm:py-6 text-base sm:text-lg md:text-xl font-light tracking-tighter leading-relaxed"
            >
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  className="mb-8 last:mb-0 bg-neutral-800/30 rounded-xl p-6 border border-neutral-700/50"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3">
                    {edu.degree}
                  </h3>
                  <p className="text-lg sm:text-xl text-purple-300 mb-3">
                    {edu.school}
                  </p>
                  <p className="text-base sm:text-lg text-neutral-400 mb-4">
                    {edu.date} • GPA: {edu.gpa}
                  </p>
                  {edu.details && (
                    <div className="mb-4">
                      <p className="text-base sm:text-lg text-neutral-300 mb-3">
                        {edu.details}
                      </p>
                      {edu.link && (
                        <button
                          onClick={() => handleLinkClick(edu.link!)}
                          className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 text-sm sm:text-base"
                        >
                          View Fellowship Details
                        </button>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="w-full">
          <div className="flex flex-col items-center text-center">
            <motion.h2
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="pb-4 sm:pb-6 lg:pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight"
            >
              Certifications
            </motion.h2>
            
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-4 sm:my-6 max-w-2xl py-4 sm:py-6"
            >
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 + index * 0.2 }}
                  className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 mb-4 border border-neutral-700/50"
                >
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                    {cert.name}
                  </h4>
                  <p className="text-lg text-purple-300 mb-3">
                    {cert.level} • {cert.issuer}
                  </p>
                  <p className="text-base text-neutral-400 mb-4">
                    {cert.date}
                  </p>
                  <button
                    onClick={() => handleLinkClick(cert.link)}
                    className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 text-sm sm:text-base"
                  >
                    View Badge
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
