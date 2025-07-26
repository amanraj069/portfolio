export default function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Web Tech",
      icon: "💻",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Nest.js"]
    },
    {
      id: 2,
      title: "AI/ML",
      icon: "🤖",
      skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "OpenCV"]
    },
    {
      id: 3,
      title: "Tools",
      icon: "🛠️",
      skills: ["GitHub", "VS Code", "MongoDB", "MySQL", "Docker", "AWS"]
    }
  ];

  return (
    <section id="skills" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.id} className="text-center">
              <div className="w-12 h-12 bg-foreground/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-lg">{category.icon}</span>
              </div>
              <h3 className="text-lg font-medium mb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {category.skills.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-foreground/10 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
