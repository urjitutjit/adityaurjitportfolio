import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  // Set dark mode as default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Services />
        <Resume />
        <Contact />
      </main>
      <ScrollToTop />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Aditya Urjit. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
