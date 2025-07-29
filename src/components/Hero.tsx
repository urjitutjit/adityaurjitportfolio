import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight hover:scale-105 transition-transform duration-300 cursor-default">
            Hi, I'm{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300">
              Aditya Urjit
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            I build scalable digital experiences from scratch
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center text-sm md:text-base">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
              Full-Stack Developer
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20">
              MERN & Java Specialist
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
              Backend Enthusiast
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-glow transition-all duration-300 group"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="https://github.com/urjitutjit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-urjit-a5598a223/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;