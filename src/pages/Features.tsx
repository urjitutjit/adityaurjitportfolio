import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Battery, GitBranch, BarChart3, Leaf, Route, TrendingUp, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Prompt Optimization Engine",
      description: "AI-powered optimization of prompts for maximum efficiency and accuracy in EV operations.",
      benefits: ["Auto-tuning parameters", "Performance analytics", "Cost optimization"],
      color: "text-primary"
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Battery & Route Templates",
      description: "Pre-built prompt templates specifically designed for battery management and route optimization.",
      benefits: ["Ready-to-use templates", "Domain expertise built-in", "Customizable parameters"],
      color: "text-accent"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Prompt Versioning & Feedback",
      description: "Track prompt evolution, compare versions, and implement feedback loops for continuous improvement.",
      benefits: ["Version control", "A/B testing", "Performance tracking"],
      color: "text-primary"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Carbon Footprint Predictors",
      description: "Advanced AI models to predict and minimize carbon emissions in EV fleet operations.",
      benefits: ["CO₂ predictions", "Emission analytics", "Green optimization"],
      color: "text-accent"
    }
  ];

  const capabilities = [
    "Real-time energy consumption monitoring",
    "Predictive battery life modeling",
    "Route optimization for minimal carbon footprint",
    "Fleet-wide efficiency analytics",
    "Integration with Green Rider systems",
    "Multi-model LLM support (GPT-4, Claude, etc.)"
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Leaf className="h-3 w-3 mr-1" />
            Features
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Intelligent Features for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Sustainable Operations
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced LLM-powered tools designed specifically for eco-tech companies and EV operations
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-border/50">
              <CardHeader>
                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="bg-card border border-border rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground">
              Everything you need for intelligent EV fleet management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center">
                <TrendingUp className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Diagrams Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">How LLMs Assist Energy Decisions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <Battery className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Battery Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  AI analyzes usage patterns to predict optimal charging cycles and extend battery life
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <Route className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Route Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Smart routing algorithms consider traffic, terrain, and energy consumption for optimal paths
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Carbon Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Real-time CO₂ monitoring and prediction helps achieve sustainability goals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-card border-primary/20">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Experience the power of AI-driven EV optimization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
                  onClick={() => navigate('/app')}
                >
                  Try the Workspace
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/templates')}
                >
                  View Templates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;