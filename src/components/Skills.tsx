import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  GitBranch,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"],
      color: "text-blue-400"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "Java", "Python", "REST APIs", "WebSockets"],
      color: "text-green-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "SQL", "Redis", "Database Design"],
      color: "text-purple-400"
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "Linux", "Postman", "VS Code"],
      color: "text-orange-400"
    },
    {
      title: "Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Java", "Python", "C++", "SQL"],
      color: "text-cyan-400"
    },
    {
      title: "CI/CD & Monitoring",
      icon: GitBranch,
      skills: ["GitHub Actions", "Sentry", "Vercel", "AWS", "Performance Monitoring"],
      color: "text-pink-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
          Skills & <span className="bg-gradient-hero bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300">Tech Stack</span>
        </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I work with modern technologies to build scalable, performant, and user-friendly applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-background/50">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className="hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                Core <span className="text-primary">Competencies</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Full-Stack Development</h4>
                  <p className="text-muted-foreground text-sm">
                    End-to-end application development from concept to deployment
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">API Development</h4>
                  <p className="text-muted-foreground text-sm">
                    RESTful APIs, authentication, and real-time communication
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Database Design</h4>
                  <p className="text-muted-foreground text-sm">
                    Efficient schema design and query optimization
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">System Architecture</h4>
                  <p className="text-muted-foreground text-sm">
                    Scalable system design and performance optimization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;