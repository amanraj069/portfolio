export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 bg-foreground/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light mb-6">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <p className="text-sm text-foreground/70 flex items-center justify-center gap-2">
              <span>📧</span> aman.r23@iiits.in
            </p>
            <p className="text-sm text-foreground/70 flex items-center justify-center gap-2">
              <span>📞</span> +91 8757462008
            </p>
            <p className="text-sm text-foreground/70 flex items-center justify-center gap-2">
              <span>📍</span> IIIT Sricity, AP
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-foreground/70 flex items-center justify-center gap-2">
              <span>🎓</span> CS Student (May 2027)
            </p>
            <p className="text-sm text-foreground/70 flex items-center justify-center gap-2">
              <span>💼</span> SDE Intern at Agrivision4u
            </p>
            <p className="text-sm text-foreground/70 flex items-center justify-center gap-2">
              <span>🔥</span> Open to opportunities
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <a 
            href="mailto:aman.r23@iiits.in" 
            className="flex items-center gap-2 px-6 py-2 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors text-sm"
          >
            <span>📧</span> Email
          </a>
          <a 
            href="https://github.com/amanraj069" 
            className="flex items-center gap-2 px-6 py-2 border border-foreground/20 rounded-full hover:border-foreground/40 transition-colors text-sm"
          >
            <span>🐙</span> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
