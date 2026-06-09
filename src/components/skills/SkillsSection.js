"use client";
import { motion } from "framer-motion";

const languages = ["C", "C++", "Java", "Python", "JavaScript"];

const frontend = ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"];

const backend = [
  "Node.js",
  "Express.js",
  "Nest.js",
  "REST APIs",
  "GraphQL",
  "WebSockets",
  "Apache Kafka",
  "Apache Solr",
];

const databases = ["MongoDB", "MySQL", "PostgreSQL", "Redis", "SQLite"];

const aiMl = [
  "LangChain",
  "Generative AI",
  "RAG Pipelines",
  "Deep Learning",
  "Prompt Engineering",
];

const cloudAndDevOps = [
  "AWS (EC2, S3, Lambda, ALB)",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "CI/CD",
  "Git",
  "n8n",
];

const coreConcepts = [
  "Data Structures & Algorithms",
  "System Design",
  "Distributed Systems",
  "Container Orchestration",
  "OOP",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section id="skills" className="w-full flex flex-col items-center px-4 md:px-12 py-10 md:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-medium tracking-tight mb-2 md:mb-4 text-black dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-light max-w-4xl">
            A comprehensive overview of the technologies, frameworks, and tools I use to build scalable applications.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-6">
          <Section title="Languages" items={languages} />
          <Section title="Frontend" items={frontend} />
          <Section title="Backend" items={backend} />
          <Section title="Databases" items={databases} />
          <Section title="AI/ML" items={aiMl} />
          <Section title="Cloud & DevOps" items={cloudAndDevOps} />
          <Section title="Core Concepts" items={coreConcepts} />
        </div>
      </motion.div>
    </section>
  );
}

function Section({ title, items }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div variants={itemVariants} className="w-full border-b border-gray-200 dark:border-white/10 pb-4 md:pb-6 last:border-0">
      <h3 className="text-base md:text-xl font-semibold md:font-medium mb-3 md:mb-6 text-black dark:text-white">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <SkillBadge key={item}>{item}</SkillBadge>
        ))}
      </div>
    </motion.div>
  );
}

function SkillBadge({ children }) {
  return (
    <span className="px-3 md:px-4 py-1 md:py-2 bg-white dark:bg-black/40 backdrop-blur-md hover:bg-gray-50 dark:hover:bg-white/10 text-gray-800 dark:text-gray-200 text-[11px] md:text-sm font-medium rounded-full border border-gray-200 dark:border-white/10 shadow-sm transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-0.5 hover:shadow-md">
      {children}
    </span>
  );
}
