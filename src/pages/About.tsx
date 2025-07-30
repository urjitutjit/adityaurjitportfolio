import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Target, Users, Zap, Github, ExternalLink, ArrowRight, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability First",
      description: "Every feature is designed to reduce carbon footprint and promote clean energy adoption in transportation.",
      color: "text-primary"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI-Powered Efficiency",
      description: "Leveraging cutting-edge LLM technology to optimize energy consumption and operational efficiency.",
      color: "text-accent"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Purpose-Built",
      description: "Specifically designed for EV operations and clean mobility solutions, not generic AI tools.",
      color: "text-primary"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description: "Built with and for the eco-tech community, incorporating real-world feedback and needs.",
      color: "text-accent"
    }
  ];

  const technologies = [
    { name: "LangChain", description: "For prompt orchestration and LLM integration" },
    { name: "FastAPI", description: "High-performance backend for real-time processing" },
    { name: "OpenAI GPT-4", description: "Advanced language model for intelligent analysis" },
    { name: "Anthropic Claude", description: "Alternative LLM for diverse prompt testing" },
    { name: "React + TypeScript", description: "Modern frontend for intuitive user experience" },
    { name: "PostgreSQL", description: "Robust database for prompt versioning and analytics" }
  ];

  const team = [
    {
      name: "AI Research Team",
      role: "Technical Development",
      description: "Specialists in LLM optimization, prompt engineering, and sustainable AI applications."
    },
    {
      name: "EV Industry Experts",
      role: "Domain Advisors",
      description: "Fleet managers, energy analysts, and sustainability consultants guiding product development."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Leaf className="h-3 w-3 mr-1" />
            About GreenPrompt
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Clean Mobility +{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            GreenPrompt is the first intelligent prompt automation platform specifically designed for sustainable 
            EV operations. We're revolutionizing how eco-tech companies leverage AI for cleaner, 
            more efficient transportation.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-gradient-card border-primary/20">
          <CardContent className="pt-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To accelerate the transition to sustainable transportation by making AI-powered optimization 
                accessible to every EV operator, from golf cart fleets to delivery services, helping reduce 
                global carbon emissions one optimized route at a time.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className={`${value.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Focus */}
        <Card className="mb-16 border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Industry Focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                GreenPrompt is specifically designed for sustainable transportation and clean mobility companies. 
                Our AI solutions address real-world challenges in the EV industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Domain Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of EV operations and sustainability metrics
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">AI Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Cutting-edge prompt engineering for EV optimization
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Real-World Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Live validation with EV fleet operations
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Innovation Engine</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous development based on industry feedback
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="space-y-6">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="hover:shadow-glow transition-all duration-300 group">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-2">Open Source</h3>
                  <p className="text-sm text-muted-foreground">
                    Contribute to sustainable AI development
                  </p>
                </div>
                <Github className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-glow transition-all duration-300 group">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-2">Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive guides and API documentation
                  </p>
                </div>
                <ExternalLink className="h-8 w-8 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-card border-primary/20">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your EV Operations?</h3>
              <p className="text-muted-foreground mb-6">
                Join the sustainable transportation revolution with AI-powered optimization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
                  onClick={() => navigate('/app')}
                >
                  Start Using GreenPrompt
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/contact')}
                >
                  Get in Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;