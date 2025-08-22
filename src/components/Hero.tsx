import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Rama_Standing.JPG";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
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
      <div className="flex flex-col lg:flex-row lg:flex-wrap">
        {/* Text content - mobile first */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 sm:pb-6 lg:pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight lg:mt-16"
            >
              Rama
            </motion.h2>
            
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-transparent mb-4"
            >
              Software Engineer
            </motion.span>
            
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 sm:my-6 max-w-xl py-4 sm:py-6 text-base sm:text-lg md:text-xl font-light tracking-tighter leading-relaxed"
            >
              {HERO_CONTENT.split('\n\n').map((line, index) => (
                <span key={index} className="block mb-4 last:mb-0">
                  {line}
                </span>
              ))}
            </motion.p>
          </div>
        </div>
        
        {/* Profile image - mobile first */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-2xl w-4/5 sm:w-3/4 md:w-2/3 lg:w-2/3 max-w-sm lg:max-w-md"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Ramakanth A"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
