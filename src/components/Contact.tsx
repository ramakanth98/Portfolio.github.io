import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.open(`mailto:${CONTACT.email}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${CONTACT.phoneNo.replace(/\s/g, '')}`, '_blank');
  };

  return (
    <div className="border-b border-neutral-900 pb-16 sm:pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-8 sm:my-10 text-center text-3xl sm:text-4xl lg:text-5xl font-light"
      >
        Get in Touch
      </motion.h2>
      
      <div className="text-center tracking-tighter max-w-2xl mx-auto px-4">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <p className="text-lg sm:text-xl text-neutral-300 mb-4">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={handlePhoneClick}
          >
            <p className="text-lg sm:text-xl text-neutral-300 hover:text-purple-300 transition-colors">
              📞 {CONTACT.phoneNo}
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={handleEmailClick}
          >
            <p className="text-lg sm:text-xl text-neutral-300 hover:text-purple-300 transition-colors border-b border-neutral-700 hover:border-purple-500 transition-colors inline-block">
              ✉️ {CONTACT.email}
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8"
        >
          <p className="text-sm sm:text-base text-neutral-400">
            Feel free to reach out - I'd love to hear from you!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
