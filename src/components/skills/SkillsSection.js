"use client";
import { memo } from "react";
import { motion } from "framer-motion";

const languages = ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"];

const frontend = ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"];

const backend = [
  "Node.js",
  "Express.js",
  "Nest.js",
  "REST APIs",
  "GraphQL",
  "WebSockets",
  "Apache Kafka",
  "BullMQ",
  "Zod",
];

const databases = [
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "SQLite",
  "DynamoDB",
  "FalkorDB (Cypher)",
];

const aiMl = [
  "LangChain",
  "LangGraph",
  "GenAI",
  "Advanced RAG",
  "Agentic AI",
  "MCP",
  "Knowledge Graphs",
  "Amazon Bedrock",
  "Strands Agents",
  "Gemini API",
  "OR-Tools (CP-SAT)",
  "Deep Learning",
  "Prompt Engineering",
];

const cloudAndDevOps = [
  "AWS (EC2, S3, Lambda, ALB, SQS, Cognito, CloudFront, Amplify)",
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
    <section id="skills" className="scroll-mt-16 w-full flex flex-col items-center px-4 md:px-12 py-8 md:py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-5xl font-medium tracking-tight mb-2 md:mb-4 text-black dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-light max-w-4xl">
            A comprehensive overview of the technologies, frameworks, and tools I use to build scalable applications.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
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

const Section = memo(function Section({ title, items }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div variants={itemVariants} className="w-full flex flex-col md:flex-row md:items-start gap-3 md:gap-6 border-b border-gray-200 dark:border-white/10 pb-4 last:border-0">
      <h3 className="md:w-44 md:shrink-0 md:pt-1.5 text-base md:text-lg font-semibold md:font-medium text-black dark:text-white">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 md:gap-2.5">
        {items.map((item) => (
          <SkillBadge key={item}>{item}</SkillBadge>
        ))}
      </div>
    </motion.div>
  );
});

const SkillBadge = memo(function SkillBadge({ children }) {
  return (
    <span className="px-3 md:px-4 py-1 md:py-1.5 bg-white dark:bg-[#1a1a1a] hover:bg-gray-50 dark:hover:bg-[#252525] text-gray-800 dark:text-gray-200 text-[11px] md:text-sm font-medium rounded-full border border-gray-200 dark:border-white/10 transition-transform duration-300 cursor-default hover:scale-105 hover:-translate-y-0.5 will-change-transform transform-gpu">
      {children}
    </span>
  );
});
