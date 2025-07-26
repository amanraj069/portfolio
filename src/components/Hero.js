export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-4">
          Hi, I'm <span className="font-medium">Aman Raj</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
          Computer Science student at IIIT Sricity with expertise in full-stack development, 
          AI/ML, and modern web technologies. Currently working as an SDE Intern at Agrivision4u.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-foreground/20 rounded-full hover:border-foreground/40 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
