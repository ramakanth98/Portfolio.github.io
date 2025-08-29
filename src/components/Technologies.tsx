import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiNodedotjs,
  SiGraphql,
  SiRedis,
  SiOpenai,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiVercel,
} from "react-icons/si";
import { FaAws, FaCogs } from "react-icons/fa";

interface TechIcon {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  duration: number;
  name: string;
}

const Technologies: React.FC = () => {
  const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  });

  const techStack: TechIcon[] = [
    // Programming Languages
    { icon: SiPython, color: "text-yellow-400", duration: 2.5, name: "Python" },
    { icon: SiJavascript, color: "text-yellow-300", duration: 3, name: "JavaScript" },
    { icon: SiTypescript, color: "text-blue-400", duration: 6, name: "TypeScript" },
    // { icon: SiGo, color: "text-cyan-400", duration: 4, name: "Go" },
    // { icon: FaJava, color: "text-orange-400", duration: 3.5, name: "Java" },
    // { icon: SiCplusplus, color: "text-blue-500", duration: 5, name: "C++" },
    { icon: SiHtml5, color: "text-orange-500", duration: 2, name: "HTML5" },
    { icon: SiCss3, color: "text-blue-600", duration: 2.5, name: "CSS3" },
    
    // Frontend Development
    { icon: SiReact, color: "text-cyan-400", duration: 2.5, name: "React" },
    { icon: SiNextdotjs, color: "text-black-400", duration: 3, name: "Next.js" },
    { icon: SiTailwindcss, color: "text-cyan-400", duration: 8, name: "Tailwind" },
    // { icon: SiBootstrap, color: "text-purple-500", duration: 3.5, name: "Bootstrap" },
    { icon: SiRedux, color: "text-purple-400", duration: 3, name: "Redux" },
    // { icon: SiFigma, color: "text-pink-400", duration: 4, name: "Figma" },
    
    // Backend and APIs
    { icon: SiFastapi, color: "text-teal-400", duration: 2.5, name: "FastAPI" },
    { icon: SiFlask, color: "text-gray-400", duration: 3, name: "Flask" },
    { icon: SiDjango, color: "text-green-600", duration: 3.5, name: "Django" },
    { icon: SiNodedotjs, color: "text-green-500", duration: 4, name: "Node.js" },
    { icon: SiGraphql, color: "text-pink-500", duration: 4.5, name: "GraphQL" },
    { icon: SiRedis, color: "text-red-500", duration: 3, name: "Redis" },
    // { icon: SiApachekafka, color: "text-orange-400", duration: 3.5, name: "Kafka" },
    // { icon: SiRabbitmq, color: "text-orange-400", duration: 3.5, name: "RabbitMQ" },
    
    // AI & Automation
    { icon: SiOpenai, color: "text-green-400", duration: 3, name: "OpenAI" },
    { icon: FaCogs, color: "text-blue-400", duration: 4, name: "n8n" },
    
    // Data & Search
    { icon: SiPostgresql, color: "text-blue-400", duration: 3, name: "PostgreSQL" },
    { icon: SiMysql, color: "text-grey-400", duration: 4, name: "MySQL" },
    { icon: SiMongodb, color: "text-green-400", duration: 5, name: "MongoDB" },
    // { icon: SiElasticsearch, color: "text-blue-500", duration: 4.5, name: "Elasticsearch" },
    // { icon: SiPandas, color: "text-blue-600", duration: 3, name: "Pandas" },
    
    // DevOps & Cloud
    { icon: SiDocker, color: "text-blue-400", duration: 3, name: "Docker" },
    { icon: SiKubernetes, color: "text-indigo-400", duration: 5, name: "Kubernetes" },
    // { icon: SiGithubactions, color: "text-gray-400", duration: 2.5, name: "GitHub Actions" },
    // { icon: SiJenkins, color: "text-red-400", duration: 4, name: "Jenkins" },
    { icon: FaAws, color: "text-orange-400", duration: 2, name: "AWS" },
    { icon: SiVercel, color: "text-black-400", duration: 3.5, name: "Vercel" },
     
    // Security & Tools
    // { icon: BiShield, color: "text-green-500", duration: 3, name: "Security" },
    // { icon: SiGithub, color: "text-gray-400", duration: 2.5, name: "GitHub" },
    // { icon: SiLinkedin, color: "text-blue-600", duration: 2, name: "LinkedIn" },
  ];

  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-4 lg:mb-36">
      <div className="flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="pb-4 sm:pb-6 lg:pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight"
        >
          Core Technologies
        </motion.h2>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-9 px-4 sm:px-0 justify-items-center"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex justify-center"
            >
              <div className="rounded-2xl border-2 sm:border-4 border-neutral-800 p-4 sm:p-6 hover:border-neutral-700 transition-all duration-300 cursor-pointer bg-neutral-900/50 hover:bg-neutral-800/50 flex justify-center items-center">
                <tech.icon 
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} 
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
