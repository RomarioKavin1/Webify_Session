import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
