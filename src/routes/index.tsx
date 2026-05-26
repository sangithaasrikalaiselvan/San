import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/portfolio/Loader";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { FloatingNav } from "@/components/portfolio/FloatingNav";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Projects } from "@/components/portfolio/Projects";
import { Hackathons } from "@/components/portfolio/Hackathons";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Connect } from "@/components/portfolio/Connect";
import { Footer } from "@/components/portfolio/Footer";
import { ParticleField } from "@/components/portfolio/ParticleField";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "San-Agentic AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of San-Agentic AI Engineer, ML developer, and agentic AI builder. Projects, hackathons, and credentials.",
      },
      { property: "og:title", content: "San-Agentic AI Engineer" },
      {
        property: "og:description",
        content: "Award-winning AI/ML engineer portfolio. Projects, hackathons, certifications, and more.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Loader />
      <CursorGlow />
      <ParticleField />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FloatingNav />
        <Certifications />
        <Achievements />
        <Projects />
        <Hackathons />
        <Skills />
        <Experience />
        <Education />
        <Connect />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}
