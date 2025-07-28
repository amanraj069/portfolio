const languages = ["C", "C++", "Java", "Python"];

const frameworksAndLibraries = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
];

const cloudAndDevOps = [
  "AWS",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Apache kafka",
  "Container Orchestration",
];

const devToolsAndIDEs = [
  "Git",
  "Google Colab",
  "Slack",
  "VS Code",
  "Cursor",
  "WindSurf",
];

const databases = ["MySQL", "MongoDB", "SQLite"];

const aiTools = ["Claude", "Grok", "ChatGPT", "Gemini"];

const csConcepts = [
  "Operating Systems",
  "DB Management",
  "System Design",
  "Computer Networks",
  "Object-Oriented Programming (OOP)",
  "Web Development",
  "Cloud Management",
  "Deep Learning",
  "Automations",
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-12 pt-24 pb-12">
      <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center mt-4">
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
        <Section title="AI & ML Tools" items={aiTools} />
        <Section title="CS Concepts & Additional Skills" items={csConcepts} />
      </div>
    </main>
  );
}

function Section({ title, items }) {
  return (
    <section>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
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
    <span className="px-3 py-1 rounded bg-gray-100 text-gray-800 text-sm font-medium border border-gray-200">
      {children}
    </span>
  );
}
