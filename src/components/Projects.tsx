import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import campusEatsImg from "@/assets/campus-eats-project.jpg";
import pixelForgeImg from "@/assets/pixelforge-project.jpg";
import cricketImg from "@/assets/cricket-project.jpg";
import tradingBotImg from "@/assets/trading-bot-project.jpg";
import whatsappDriveImg from "@/assets/whatsapp-google-drive-assistant.jpg";
import courtDataImg from "@/assets/court-data-fetcher-dashboard.jpg";
import janitriDashboardImg from "@/assets/janitri-dashboard-login.jpg";
import miniLinkedInImg from "@/assets/mini-linkedin-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Campus Eats",
      description: "Full-stack food delivery platform with comprehensive user authentication, shopping cart, order tracking, and admin dashboard. Features secure JWT authentication, MongoDB integration, and Vercel deployment for both frontend and backend.",
      image: campusEatsImg,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcryptjs", "Vercel"],
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
      description: "Comprehensive Spring Boot backend for real-time cricket match insights with live score updates, player statistics, and WebSocket support. Features RESTful APIs, H2 database, and Vercel deployment for seamless cricket data management.",
      image: cricketImg,
      technologies: ["Java 17", "Spring Boot", "Spring WebSocket", "H2 Database", "Maven", "Vercel"],
      liveLink: "https://cricket-o-meter.vercel.app/",
      githubLink: null,
      featured: true
    },
    {
      title: "Future Order Trading Bot",
      description: "Automated trading bot for Binance Futures with advanced order management and risk control. Features real-time market analysis, custom trading strategies, and secure API integration for seamless futures trading execution.",
      image: tradingBotImg,
      technologies: ["Python", "Binance API", "Trading Algorithms", "Risk Management", "Automation"],
      liveLink: null,
      githubLink: "https://github.com/urjitutjit/urjitutjit-Binance-Futures-Order-TradingBot.git",
      featured: true
    },
    {
      title: "WhatsApp-Driven Google Drive Assistant",
      description: "A powerful n8n workflow that enables WhatsApp-based Google Drive management through simple text commands. Features include file operations (LIST, DELETE, MOVE), AI-powered document summarization with OpenAI GPT-4, and comprehensive audit logging.",
      image: whatsappDriveImg,
      technologies: ["n8n", "Twilio WhatsApp API", "Google Drive API", "OpenAI GPT-4", "Docker", "OAuth2"],
      liveLink: null,
      githubLink: "https://github.com/urjitutjit/WhatsApp-Driven-Google-Drive-Assistant-Project.git",
      featured: true
    },
    {
      title: "Court Data Fetcher & Mini-Dashboard",
      description: "A comprehensive web application that fetches and displays case information from Delhi High Court website. Features automated CAPTCHA handling with Selenium, case search functionality, PDF downloads, and responsive dashboard with data export capabilities.",
      image: courtDataImg,
      technologies: ["Python", "Flask", "Selenium WebDriver", "SQLite", "Bootstrap 5", "Docker"],
      liveLink: null,
      githubLink: "https://github.com/urjitutjit/Court-Data-Fetcher-Mini-Dashboard-Project.git",
      featured: true
    },
    {
      title: "Janitri Dashboard Login Page Automation",
      description: "Advanced automated test framework for healthcare dashboard login functionality using Java and Selenium WebDriver. Implements Page Object Model (POM) design pattern with comprehensive test scenarios covering UI validation, form behavior, and error handling using TestNG.",
      image: janitriDashboardImg,
      technologies: ["Java 11", "Selenium WebDriver", "TestNG", "Maven", "Page Object Model", "Chrome WebDriver"],
      liveLink: null,
      githubLink: "https://github.com/urjitutjit/Janitri-Dashboard.git",
      featured: true
    },
    {
      title: "Mini LinkedIn - Professional Community Platform",
      description: "A modern, full-stack social networking platform inspired by LinkedIn, built with cutting-edge technologies for professional networking and community engagement. Features user authentication, post management, user profiles, search functionality, and real-time interactions.",
      image: miniLinkedInImg,
      technologies: ["Next.js 14", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      liveLink: "https://linkedinminiurjit.vercel.app/",
      githubLink: "https://github.com/urjitutjit/linkedinmini.git",
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

        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/2">
                <Card 
                  className="bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-intense transition-all duration-500 group overflow-hidden h-full"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:scale-110 transition-transform duration-300" />
          <CarouselNext className="hover:scale-110 transition-transform duration-300" />
        </Carousel>

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