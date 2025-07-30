import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Leaf, Brain, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
              Intelligent{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Prompt Automation
              </span>
              <br />
              for Sustainable EV Operations
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
              Reduce energy waste by 20% using LLMs. Smart prompt library for EV optimization. 
              Built for eco-tech and clean mobility companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300 group"
                onClick={() => navigate('/app')}
              >
                Try GreenPrompt
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/10 hover:shadow-glow hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                Request Demo
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300 group">
                <Zap className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">20% Energy Reduction</h3>
                <p className="text-muted-foreground text-sm">Optimize battery usage with AI-powered prompts</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300 group">
                <Brain className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Smart LLM Integration</h3>
                <p className="text-muted-foreground text-sm">GPT-4, Claude, and custom models for EV operations</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300 group">
                <Target className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Built for Clean Mobility</h3>
                <p className="text-muted-foreground text-sm">Designed for eco-tech and sustainable transport</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            See GreenPrompt in Action
          </h2>
          <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-intense">
            <div className="aspect-video bg-gradient-card flex items-center justify-center">
              <div className="text-center">
                <Leaf className="h-16 w-16 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">Demo Interface Preview</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Interactive prompt testing for EV optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;