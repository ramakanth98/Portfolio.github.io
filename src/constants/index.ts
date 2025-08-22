import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpeg";

export const HERO_CONTENT = `Hey, I'm Ramakanth! I'm a Software Engineer who loves building fast, scalable apps with Python, FastAPI, and React. I'm always curious about new tech and enjoy solving tricky problems.\n\nWhen I'm not coding, I'm probably underwater (swimming) or smashing birdies on the badminton court.\n\nI'm all about learning, growing, and having fun while creating cool stuff.`;

export const ABOUT_TEXT = `Hey there! I'm Ramakanth, a Software Engineer who thrives on building things that actually work—and work well. I've got a soft spot for Python, Web Development, Front-end tech, and I enjoy diving deep into microservices, distributed systems, and exploring the wild world of AI. There's something satisfying about fine-tuning performance until everything just clicks.\n\nBeyond the tech, I'm a competitive badminton player and a solid underwater swimmer.\n\nIf there's a new technology or framework out there, I'm probably already messing around with it. I'm the kind of person who gets excited over clean API designs and scalable architecture, but I'm also up for a casual conversation about Anime, movies, or the latest gadgets.\n\nI'm always on the lookout for opportunities to grow, collaborate, and contribute to exciting projects.\n\n`;

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

export interface Contact {
  phoneNo: string;
  email: string;
}

export const EXPERIENCES: Experience[] = [
  {
    year: "March 2024 - Present",
    role: "Software Engineer",
    company: "Capital Vacations, Myrtle Beach, SC",
    description: `Implemented a scalable Elasticsearch-based search, cutting query times from 3–4s to 200–300ms and boosting user satisfaction from 50% to 80%. Deployed dynamic Next.js pages on Vercel to reduce content creation time by 80%, and integrated GraphQL to slash load times by 40%. Led cross-functional teams in delivering robust microservices with Python, FastAPI, and Redis caching for near O(1) lookups.`,
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "Redis", "Elasticsearch", "AWS", "GraphQL", "PostgreSQL", "Celery", "Vercel"],
  },
  {
    year: "Aug 2023 - Dec 2023",
    role: "Graduate Teaching Assistant",
    company: "UNC Charlotte",
    description: `Mentored over 120 Graduate and PhD students in Software System Design and Implementation. Guided students in developing web applications, enhancing their understanding of modern software development practices.`,
    technologies: ["Java", "Python", "SQL", "React.js", "JavaScript"],
  },
  {
    year: "Sep 2022 - Dec 2022",
    role: "Graduate Research Assistant",
    company: "UNC Charlotte",
    description: `Built and deployed a policy-based RBAC system for the college portal, enabling section-level access control and custom roles. Reduced role creation time by 70% and improved security without disrupting operations. Developed with FastAPI and PostgreSQL, enhancing scalability for future expansions.`,
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    year: "Jan 2020 - Jul 2022",
    role: "Software Engineer",
    company: "Hughes Network Systems, Bangalore, India",
    description: `Optimized legacy systems by migrating business logic from 1,000+ line stored procedures to Python REST APIs, cutting query times by 70% and improving scalability. Built an in-house compliance reporting service with FastAPI and Playwright, reducing report generation time by 90% and cutting external costs by 70%. Centralized DTOs with a Blueprint Service, slashing build failures by 60% and boosting developer efficiency by 40%.`,
    technologies: ["Python", "Flask", "FastAPI", "MongoDB", "PostgreSQL", "Docker", "Redis", "CI/CD", "GraphQL", "REST APIs"],
  },
  {
    year: "Jan 2019 - Dec 2019",
    role: "Software Engineer",
    company: "Capsley, Bangalore, India",
    description: `Contributed to a retail-business web application as a Python developer, enhancing functionality and user experience using Django. Optimized MongoDB queries and supported the design of an audit log system for detailed CRUD operations and data traceability. Engaged in API development and applied Agile practices to improve backend infrastructure.`,
    technologies: ["Python", "Django", "REST APIs", "MongoDB", "Agile SDLC"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "FastAPI Social Media Platform with CI/CD & Security Enhancements",
    image: project1,
    description:
      "Developed a social media platform using FastAPI, focusing on secure user interactions, JWT authentication, and API testing. Enhanced performance with PostgreSQL and Docker, and ensured seamless deployments with GitHub Actions. Strengthened security with OAuth, SSL, and nginx.",
    technologies: ["FastAPI", "Python", "PostgreSQL", "Docker", "OAuth", "SSL", "Nginx" ],
  },
  {
    title: "Semantic Search OpenAI",
    image: project2,
    description:
      "Built a semantic search engine using OpenAI embeddings and MongoDB Atlas Search to perform vector-based searches on movie plots. Integrated Python with Hugging Face transformers for accurate natural language query results.",
    technologies: ["Python", "MongoDB", "OpenAI", "Hugging-Face-Transformers", "Vector-Search" ],
  },
  {
    title: "Traffic Density Management using Movable Divider and RFID",
    image: project3,
    description:
      "Designed a system using RFID and real-time algorithms to optimize traffic flow and emergency response by dynamically adjusting lanes. Co-authored a research paper on the innovation.",
    technologies: ["RFID", "Algorithms", "Python"],
  },
];

export const CONTACT: Contact = {
  phoneNo: "+1 (980) 944-6262 ",
  email: "aramakanth1998@gmail.com",
};
