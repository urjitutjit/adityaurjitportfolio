import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Server, 
  Shield, 
  BarChart3, 
  Zap,
  Settings
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern frameworks like React, Node.js, and MERN stack. From concept to deployment.",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimization"]
    },
    {
      icon: Server,
      title: "API Integration & Development",
      description: "Design and develop robust RESTful APIs, third-party integrations, and microservices architecture for scalable applications.",
      features: ["REST APIs", "Authentication", "Real-time Features"]
    },
    {
      icon: Shield,
      title: "Secure Backend Architecture",
      description: "Build secure, scalable backend systems with proper authentication, authorization, and data protection protocols.",
      features: ["RBAC Implementation", "Data Encryption", "Security Audits"]
    },
    {
      icon: BarChart3,
      title: "Custom Dashboards & Analytics",
      description: "Create interactive dashboards and admin panels with real-time data visualization and comprehensive analytics.",
      features: ["Data Visualization", "Real-time Updates", "Custom Reports"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize application performance, database queries, and implement efficient caching strategies for better user experience.",
      features: ["Query Optimization", "Caching Strategies", "Load Balancing"]
    },
    {
      icon: Settings,
      title: "Code Review & Refactoring",
      description: "Improve existing codebases through comprehensive code reviews, refactoring, and implementing best practices.",
      features: ["Code Quality", "Best Practices", "Documentation"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
          What I <span className="bg-gradient-hero bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300">Do</span>
        </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive development services to help bring your ideas to life with 
            modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                Ready to Build Something <span className="text-primary">Amazing?</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your project and how I can help you achieve your goals with 
                cutting-edge technology and proven development practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-hero text-navy-dark hover:shadow-glow h-10 px-6 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get In Touch
                </a>
                <a 
                  href="mailto:adityaurjit4@gmail.com"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary/30 bg-background hover:bg-primary/10 hover:text-accent-foreground h-10 px-6 py-2"
                >
                  Send Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;