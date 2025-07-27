import Navigation from "../components/Navigation";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
    </div>
  );
}
