export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-foreground/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium">Aman Raj</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
