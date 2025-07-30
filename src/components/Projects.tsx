import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import campusEatsImg from "@/assets/campus-eats-project.jpg";
import pixelForgeImg from "@/assets/pixelforge-project.jpg";
import cricketImg from "@/assets/cricket-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Campus Eats",
      description: "MERN stack food delivery app with JWT authentication, real-time WebSocket order tracking, and Vercel deployment. Features include user authentication, restaurant management, and live order updates.",
      image: campusEatsImg,
      technologies: ["React.js", "Node.js", "MongoDB", "JWT", "WebSocket", "Vercel"],
      liveLink: "https://insta-canteen-connect.vercel.app/",
      githubLink: null,
      featured: true
    },
    {
      title: "PixelForge Nexus",
      description: "Secure project management system with Role-Based Access Control (RBAC) and advanced encryption. Built for enterprise-level security and efficient project collaboration.",
      image: pixelForgeImg,
      technologies: ["MERN Stack", "RBAC", "Encryption", "Security", "MongoDB"],
      liveLink: null,
      githubLink: "https://github.com/urjitutjit/PixelForge-Nexus---Secure-Project-Management-System",
      featured: true
    },
    {
      title: "Cricket-o-Meter",
      description: "Real-time cricket prediction and analytics app built with MERN stack. Features live match data, predictive analytics, and interactive dashboards for cricket enthusiasts.",
      image: cricketImg,
      technologies: ["React.js", "Node.js", "MongoDB", "Real-time APIs", "Analytics"],
      liveLink: "https://cricket-o-meter.vercel.app/",
      githubLink: null,
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
            My <span className="bg-gradient-hero bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my featured projects that showcase my skills in full-stack development, 
            system design, and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-intense transition-all duration-500 group overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-hero text-navy-dark font-semibold hover:scale-105 transition-transform duration-300 cursor-default">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    {project.liveLink && (
                      <Button 
                        asChild
                        className="bg-gradient-hero hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                      >
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    
                    {project.githubLink && (
                      <Button 
                        variant="outline"
                        asChild
                        className="border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300 group"
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-primary/30 hover:bg-primary/10 hover:shadow-glow hover:scale-105 transition-all duration-300 group"
          >
            <a href="https://github.com/urjitutjit" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;