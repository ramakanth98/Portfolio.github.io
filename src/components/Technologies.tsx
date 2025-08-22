import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTypescript, TbBrandTailwind, TbBrandRedux, TbBrandGraphql, TbBrandNextjs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { BiLogoAws, BiLogoDocker } from "react-icons/bi";
import { SiMysql, SiPostgresql, SiMongodb, SiFastapi, SiKubernetes } from "react-icons/si";
import { motion } from "framer-motion";

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
    { icon: FaPython, color: "text-yellow-400", duration: 2.5, name: "Python" },
    { icon: TbBrandNextjs, color: "text-black-400", duration: 3, name: "Next.js" },
    { icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5, name: "React" },
    { icon: TbBrandRedux, color: "text-purple-400", duration: 3, name: "Redux" },
    { icon: TbBrandTypescript, color: "text-blue-400", duration: 6, name: "TypeScript" },
    { icon: TbBrandTailwind, color: "text-cyan-400", duration: 8, name: "Tailwind" },
    { icon: TbBrandGraphql, color: "text-pink-400", duration: 2, name: "GraphQL" },
    { icon: SiMysql, color: "text-grey-400", duration: 4, name: "MySQL" },
    { icon: SiPostgresql, color: "text-blue-400", duration: 3, name: "PostgreSQL" },
    { icon: SiMongodb, color: "text-green-400", duration: 5, name: "MongoDB" },
    { icon: SiFastapi, color: "text-teal-400", duration: 2.5, name: "FastAPI" },
    { icon: BiLogoAws, color: "text-orange-400", duration: 2, name: "AWS" },
    { icon: BiLogoDocker, color: "text-blue-400", duration: 3, name: "Docker" },
    { icon: SiKubernetes, color: "text-indigo-400", duration: 5, name: "Kubernetes" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-16 sm:pb-20 lg:pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-12 sm:my-16 lg:my-20 text-center text-3xl sm:text-4xl lg:text-5xl font-light"
      >
        Technologies
      </motion.h2>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-9 px-4 sm:px-0"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-2xl border-2 sm:border-4 border-neutral-800 p-4 sm:p-6 hover:border-neutral-700 transition-colors cursor-pointer group"
            title={tech.name}
          >
            <tech.icon 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${tech.color} group-hover:scale-110 transition-transform`} 
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
