"use client";
import { motion } from "framer-motion";

const languages = ["C", "C++", "Java", "Python"];

const frameworksAndLibraries = [
  "Express",
  "GraphQL",
  "Nest.js",
  "Next.js",
  "Node.js",
  "React",
  "Tailwind CSS",
  "Unity",
];

const cloudAndDevOps = [
  "AWS",
  "Apache Kafka",
  "Docker",
  "Google Cloud",
  "Kubernetes",
];

const devToolsAndIDEs = [
  "Cursor",
  "Git",
  "Google Colab",
  "Postman",
  "Slack",
  "VS Code",
];

const databases = ["MongoDB", "MySQL", "PostgreSQL", "Redis", "SQLite"];

const csConcepts = [
  "Automation (n8n)",
  "Cloud Computing & Management",
  "Computer Networks",
  "Container Orchestration",
  "Database Management",
  "Deep Learning",
  "Distributed Systems",
  "Object-Oriented Programming (OOP)",
  "Operating Systems",
  "System Design",
  "Web Development",
];

export default function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <main className="min-h-screen flex flex-col items-center px-4 md:px-12 pt-28 md:pt-32 pb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="mb-16">
          <h1 className="text-2xl md:text-5xl font-medium tracking-tight mb-2 md:mb-4 text-black dark:text-white">
            Skills & Expertise
          </h1>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl">
            A comprehensive overview of the technologies, frameworks, and tools I use to build scalable applications.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          <Section title="Programming Languages" items={languages} />
          <Section title="Frameworks & Libraries" items={frameworksAndLibraries} />
          <Section title="Cloud & DevOps" items={cloudAndDevOps} />
          <Section title="Databases" items={databases} />
          <Section title="Developer Tools & IDEs" items={devToolsAndIDEs} />
          <Section title="CS Concepts & Additional Skills" items={csConcepts} />
        </div>
      </motion.div>
    </main>
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
    <motion.section variants={itemVariants} className="w-full border-b border-gray-200 dark:border-white/10 pb-6 md:pb-10 last:border-0">
      <h2 className="text-base md:text-xl font-semibold md:font-medium mb-3 md:mb-6 text-black dark:text-white">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <SkillBadge key={item}>{item}</SkillBadge>
        ))}
      </div>
    </motion.section>
  );
}

function SkillBadge({ children }) {
  return (
    <span className="px-3 md:px-4 py-1 md:py-2 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 dark:text-gray-200 text-[11px] md:text-sm font-medium rounded-full border border-gray-200/50 dark:border-white/5 transition-all duration-300 cursor-default">
      {children}
    </span>
  );
}
