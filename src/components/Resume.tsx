import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Award, Calendar } from "lucide-react";

const Resume = () => {
  const achievements = [
    {
      title: "IIT BHU Programming Certificate",
      organization: "Indian Institute of Technology BHU",
      type: "Programming",
      year: "2025",
      link: "https://drive.google.com/file/d/1ijZUIZc0GhEGETKouFeN4HiIJ1NT86V_/view?usp=drive_link"
    },
    {
      title: "Infosys AI & DSA Certification",
      organization: "Infosys Springboard",
      type: "AI & Data Structures",
      year: "2024",
      link: "https://drive.google.com/file/d/1mLMiFVcd1RqjTzlQ9You358JsdnkygrF/view?usp=drive_link"
    },
    {
      title: "MERN Stack Development",
      organization: "Udemy",
      type: "Full-Stack Development",
      year: "2023",
      link: "https://drive.google.com/file/d/1ukaA9qJABvDfPuk8s3b4sIpfDIfu1dsQ/view?usp=drive_link"
    },
    {
      title: "IIT Roorkee Hackathon Winner",
      organization: "Indian Institute of Technology Roorkee",
      type: "Competitive Programming",
      year: "2024"
    }
  ];

  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 hover:scale-105 hover:drop-shadow-glow transition-all duration-300 cursor-default">
            Resume & <span className="bg-gradient-hero bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Download my resume or view it online to see my complete professional background, 
            skills, and project details.
          </p>
          
          {/* Resume View Button */}
          <div className="flex justify-center mb-16">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:shadow-glow hover:drop-shadow-glow transition-all duration-300 cursor-pointer"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1TPUnjOWkaPS1e7SV1JWsBQT2_ZUZMkAe/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Resume Online
              </a>
            </Button>
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="space-y-8">
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Achievements & <span className="text-primary">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const CardComponent = achievement.link ? (
                <a 
                  href={achievement.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <Card 
                    className="bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-glow hover:drop-shadow-glow transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-display font-semibold group-hover:text-primary transition-colors">
                              {achievement.title}
                            </h4>
                            <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-foreground font-medium mb-1">{achievement.organization}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-xs">
                              {achievement.type}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {achievement.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ) : (
                <Card 
                  className="bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-glow hover:drop-shadow-glow transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h4>
                        <p className="text-foreground font-medium mb-1">{achievement.organization}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {achievement.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {achievement.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );

              return (
                <div key={achievement.title}>
                  {CardComponent}
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-16">
          <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">
                Professional <span className="text-primary">Summary</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Technical Skills</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Full-Stack Development (MERN, Java)</li>
                    <li>• Backend Architecture & API Design</li>
                    <li>• Database Design & Optimization</li>
                    <li>• System Design & Scalability</li>
                    <li>• DevOps & Deployment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Key Achievements</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Built systems serving 10,000+ users</li>
                    <li>• Multiple successful project deployments</li>
                    <li>• Strong problem-solving abilities</li>
                    <li>• Continuous learning mindset</li>
                    <li>• Team collaboration experience</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;