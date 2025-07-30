import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
            About <span className="bg-gradient-hero bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300">Me</span>
          </h2>
          
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-hero rounded-full blur opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/profile-image.png" 
                  alt="Aditya Urjit"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
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
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300">Active Learner</Button>
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
                    <Button variant="secondary" size="sm" className="hover:scale-105 transition-all duration-300">Remote</Button>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Built scalable backend modules for 10,000+ users</li>
                    <li>• Developed REST APIs with robust error handling</li>
                    <li>• Implemented error tracking with Sentry monitoring</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300">Node.js</Button>
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300">REST APIs</Button>
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300">Sentry</Button>
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
                    <Button variant="secondary" size="sm" className="hover:scale-105 transition-all duration-300">Remote</Button>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Worked on system design and backend architecture</li>
                    <li>• Optimized database queries and performance</li>
                    <li>• Collaborated on scalable solution development</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300">System Design</Button>
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300">Backend Logic</Button>
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300">Performance</Button>
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