export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Milestone - Freelance Platform",
      description: "Full-stack marketplace with milestone-based system, secure authentication, real-time messaging, and role-based dashboards.",
      icon: "💼",
      gradient: "from-blue-500/20 to-purple-500/20",
      technologies: ["Node.js", "MongoDB", "JWT", "Firebase"],
      demoLink: "#",
      githubLink: "https://github.com/amanraj069"
    },
    {
      id: 2,
      title: "Resume Screening AI",
      description: "Python-based automation tool achieving 97.93% accuracy. Parses resumes, matches keywords, and ranks candidates.",
      icon: "🤖",
      gradient: "from-green-500/20 to-teal-500/20",
      technologies: ["Python", "NumPy", "Pandas", "Scikit-learn"],
      demoLink: "#",
      githubLink: "https://github.com/amanraj069"
    },
    {
      id: 3,
      title: "Agrivision4u Platform",
      description: "Agri-tech web applications with RESTful APIs, backend logic, and Agile development practices.",
      icon: "🌱",
      gradient: "from-orange-500/20 to-red-500/20",
      technologies: ["Next.js", "Node.js", "MongoDB", "REST API"],
      demoLink: "#",
      githubLink: "https://github.com/amanraj069"
    }
  ];

  return (
    <section id="projects" className="py-12 px-6 bg-foreground/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-background rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                <span className="text-2xl">{project.icon}</span>
              </div>
              <h3 className="text-lg font-medium mb-2">{project.title}</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-foreground/10 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-xs">
                <a href={project.demoLink} className="text-foreground/70 hover:text-foreground transition-colors">
                  Demo
                </a>
                <a href={project.githubLink} className="text-foreground/70 hover:text-foreground transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
