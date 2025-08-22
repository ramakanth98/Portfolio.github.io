import logo from "../assets/ARK_Logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <nav className="mb-12 sm:mb-16 md:mb-20 flex items-center justify-between py-4 sm:py-6">
      {/* Logo with mobile optimization */}
      <motion.div 
        className="flex flex-shrink-0 items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          className="w-8 sm:w-10 mx-2 object-contain" 
          src={logo} 
          alt="ARK Logo" 
        />
      </motion.div>
      
      {/* Social icons with mobile optimization */}
      <motion.div 
        className="flex items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer p-2 rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <FaLinkedin 
            onClick={() => handleSocialClick('https://www.linkedin.com/in/ramakantha/')}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer p-2 rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <FaGithub  
            onClick={() => handleSocialClick('https://github.com/ramakanth98')}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          />
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
