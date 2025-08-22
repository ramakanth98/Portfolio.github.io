import { PROJECTS, Project as ProjectType } from "../constants";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 sm:pb-20 lg:pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 sm:my-16 lg:my-20 text-center text-3xl sm:text-4xl lg:text-5xl font-light"
      >
        Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
        {PROJECTS.map((project: ProjectType, index: number) => (
          <motion.div
            key={index}
            className="bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            
            {/* Project Content */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm sm:text-base text-neutral-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-medium text-purple-400 bg-neutral-800 rounded-full border border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-neutral-400 mb-4">
          Want to see more of my work?
        </p>
        <motion.a
          href="https://github.com/ramakanth98"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View on GitHub
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Projects;
