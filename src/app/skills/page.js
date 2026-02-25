const languages = ["C", "C++", "Java", "Python"];

const frameworksAndLibraries = [
  "Tailwind CSS",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Nest.js",
  "GraphQL",
  "Unity",
];

const cloudAndDevOps = [
  "AWS",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Apache Kafka",
];

const devToolsAndIDEs = [
  "Git",
  "Google Colab",
  "Slack",
  "VS Code",
  "Cursor",
  "Postman",
];

const databases = ["MySQL", "MongoDB", "SQLite", "PostgreSQL", "Elasticsearch"];

const csConcepts = [
  "Operating Systems",
  "Database Management",
  "Computer Networks",
  "Object-Oriented Programming (OOP)",
  "Web Development",
  "System Design",
  "Container Orchestration",
  "Cloud Computing & Management",
  "Deep Learning",
  "Automation (n8n)",
  "Distributed Systems",
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1e1e1e] text-black dark:text-white flex flex-col items-center px-12 pt-24 pb-12 transition-colors duration-300">
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl text-center mt-4 transition-colors">
        Technologies and tools I&apos;m familiar with
      </p>
      <div className="w-full max-w-4xl flex flex-col gap-8">
        <Section title="Programming Languages" items={languages} />
        <Section
          title="Frameworks & Libraries"
          items={frameworksAndLibraries}
        />
        <Section title="Cloud & DevOps" items={cloudAndDevOps} />
        <Section title="Developer Tools & IDEs" items={devToolsAndIDEs} />
        <Section title="Databases" items={databases} />
        <Section title="CS Concepts & Additional Skills" items={csConcepts} />
      </div>
    </main>
  );
}

function Section({ title, items }) {
  return (
    <section>
      <h2 className="text-xl font-medium mb-2 text-black dark:text-white transition-colors">
        {title}
      </h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <SkillBadge key={item}>{item}</SkillBadge>
        ))}
      </div>
    </section>
  );
}

function SkillBadge({ children }) {
  return (
    <span className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-neutral-200 text-sm font-medium border border-gray-200 dark:border-neutral-700 transition-colors">
      {children}
    </span>
  );
}
