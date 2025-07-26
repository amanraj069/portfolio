export default function About() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              I'm a passionate Computer Science student at IIIT Sricity with a strong foundation in 
              full-stack development and AI/ML technologies. Currently serving as an SDE Intern at 
              Agrivision4u, where I work on cutting-edge agri-tech solutions.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My expertise spans modern web technologies like React.js, Next.js, and Node.js, 
              combined with AI/ML skills in Python, TensorFlow, and data science libraries. 
              I'm passionate about creating impactful solutions and always eager to take on new challenges.
            </p>
          </div>
          <div className="bg-foreground/5 rounded-2xl p-6 text-center">
            <div className="w-20 h-20 bg-foreground/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Aman Raj</h3>
            <p className="text-sm text-foreground/70 mb-3">Computer Science Student</p>
            <div className="space-y-1 text-sm text-foreground/60">
              <p>🎓 IIIT Sricity (GPA: 9.3)</p>
              <p>💼 SDE Intern at Agrivision4u</p>
              <p>🔥 Expected Graduation: May 2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
