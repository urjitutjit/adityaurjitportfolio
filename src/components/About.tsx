import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer currently pursuing B.Tech in Computer Science (2022–2026) 
            at Noida Institute of Engineering and Technology. I specialize in building robust and scalable 
            web applications, from frontend interfaces to backend infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education Card */}
          <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Education</h3>
                  <p className="text-foreground font-medium">B.Tech Computer Science</p>
                  <p className="text-muted-foreground">Noida Institute of Engineering and Technology</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">2022 - 2026</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience Summary */}
          <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Experience</h3>
                  <p className="text-foreground font-medium">Full-Stack Development</p>
                  <p className="text-muted-foreground">MERN Stack, Java, Python</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">2+ Years</Badge>
                    <Badge variant="outline">Active Learner</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Internships */}
        <div className="space-y-6">
          <h3 className="text-2xl font-display font-bold text-center mb-8">Professional Experience</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Internshala */}
            <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-display font-semibold text-primary">Backend Developer Intern</h4>
                      <p className="text-foreground font-medium">Internshala</p>
                    </div>
                    <Badge variant="secondary">Remote</Badge>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Built scalable backend modules for 10,000+ users</li>
                    <li>• Developed REST APIs with robust error handling</li>
                    <li>• Implemented error tracking with Sentry monitoring</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">REST APIs</Badge>
                    <Badge variant="outline">Sentry</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* BlueStock */}
            <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-display font-semibold text-primary">SDE Intern</h4>
                      <p className="text-foreground font-medium">BlueStock</p>
                    </div>
                    <Badge variant="secondary">Remote</Badge>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Worked on system design and backend architecture</li>
                    <li>• Optimized database queries and performance</li>
                    <li>• Collaborated on scalable solution development</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">System Design</Badge>
                    <Badge variant="outline">Backend Logic</Badge>
                    <Badge variant="outline">Performance</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;