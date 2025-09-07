import logo from "../assets/ARK_Logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { trackButtonClick } from "../utils/analytics";

const Navbar: React.FC = () => {
  const handleSocialClick = (url: string, platform: string) => {
    trackButtonClick(`${platform}-link`);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Full-bleed, fixed navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-neutral-950 border-b border-neutral-800/50 py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex flex-shrink-0 items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <img
                className="w-8 sm:w-10 mx-2 object-contain transition-transform duration-300 group-hover:scale-110"
                src={logo}
                alt="ARK Logo"
              />
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialClick("https://www.linkedin.com/in/ramakantha/", "linkedin")}
              className="cursor-pointer p-2 rounded-lg hover:bg-neutral-800/80 transition-all duration-300 group"
              aria-label="Open LinkedIn in new tab"
            >
              <FaLinkedin className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialClick("https://github.com/ramakanth98", "github")}
              className="cursor-pointer p-2 rounded-lg hover:bg-neutral-800/80 transition-all duration-300 group"
              aria-label="Open GitHub in new tab"
            >
              <FaGithub className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </nav>

      {/* Spacer so content doesn't slide under the fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;
