import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { trackButtonClick } from "../utils/analytics";

const Contact: React.FC = () => {
  const handleSocialClick = (url: string, platform: string) => {
    trackButtonClick(`${platform}-contact-link`);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handlePhoneClick = () => {
    trackButtonClick("phone-contact");
    window.open(`tel:${CONTACT.phoneNo}`, "_self");
  };

  const handleEmailClick = () => {
    trackButtonClick("email-contact");
    window.open(`mailto:${CONTACT.email}`, "_self");
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
          Contact
        </motion.h2>
        
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="my-4 sm:my-6 max-w-2xl py-4 sm:py-6"
        >
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="space-y-6">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePhoneClick}
                className="flex items-center gap-3 p-4 bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <FaPhone className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors duration-300" />
                <span className="text-lg sm:text-xl text-white group-hover:text-purple-300 transition-colors duration-300">
                  {CONTACT.phoneNo}
                </span>
              </motion.button>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmailClick}
                className="flex items-center gap-3 p-4 bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <FaEnvelope className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors duration-300" />
                <span className="text-lg sm:text-xl text-white group-hover:text-purple-300 transition-colors duration-300">
                  {CONTACT.email}
                </span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex items-center justify-center gap-6 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSocialClick("https://www.linkedin.com/in/ramakantha/", "linkedin")}
                className="p-4 bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                aria-label="Open LinkedIn in new tab"
              >
                <FaLinkedin className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSocialClick("https://github.com/ramakanth98", "github")}
                className="p-4 bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-gray-500/50 transition-all duration-300 group"
                aria-label="Open GitHub in new tab"
              >
                <FaGithub className="text-gray-400 text-2xl group-hover:text-gray-300 transition-colors duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
