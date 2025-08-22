import aboutImg from "../assets/ARK_ProfilePic.PNG";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-4">
      <motion.h2 
        className="my-12 sm:my-16 lg:my-20 text-center text-3xl sm:text-4xl lg:text-5xl font-light"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="flex flex-col lg:flex-row lg:flex-wrap">
        {/* Image section - mobile first */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 order-1 lg:order-1 mb-8 lg:mb-0 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img 
              className="rounded-2xl w-4/5 sm:w-3/4 md:w-2/3 lg:w-2/3 max-w-sm lg:max-w-md" 
              src={aboutImg} 
              alt="Ramakanth Profile" 
            />
          </div>
        </motion.div>
        
        {/* Text section - mobile first */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 order-2 lg:order-2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-xl px-4 sm:px-0">
              <p className="my-4 sm:my-6 py-4 sm:py-6 text-base sm:text-lg leading-relaxed">
                {ABOUT_TEXT.split('\n\n').map((line, index) => (
                  <span key={index} className="block mb-4 last:mb-0">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
