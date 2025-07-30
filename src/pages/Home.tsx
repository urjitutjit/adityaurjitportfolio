import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Leaf, Brain, Target, Play, TreePine, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import greenTreeLight from "@/assets/green-tree-light.jpg";
import greenMountains from "@/assets/green-mountains.jpg";
import waterTrees from "@/assets/water-trees.jpg";
import beesNature from "@/assets/bees-nature.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Sustainability Images */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Nature Images */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/60 to-accent/20"></div>
          
          {/* Floating Nature Images */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full overflow-hidden opacity-30 animate-pulse">
            <img src={greenTreeLight} alt="Sunlight through green trees" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-1/4 right-20 w-24 h-24 rounded-full overflow-hidden opacity-40 hover:opacity-60 transition-opacity">
            <img src={beesNature} alt="Bees in nature" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-20 left-1/4 w-40 h-28 rounded-lg overflow-hidden opacity-35 hover:opacity-50 transition-opacity">
            <img src={waterTrees} alt="Water surrounded by trees" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full overflow-hidden opacity-25 animate-pulse delay-1000">
            <img src={greenMountains} alt="Green mountains" className="w-full h-full object-cover" />
          </div>
          
          {/* Small floating elements */}
          <div className="absolute top-20 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-10 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            {/* Sustainability Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Sustainable AI Innovation</span>
            </div>
            
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
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300 group px-8 py-6 text-lg font-semibold rounded-xl"
                onClick={() => navigate('/app')}
              >
                Try GreenPrompt
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-glow hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm group"
                onClick={() => navigate('/contact')}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Request Demo
              </Button>
            </div>

            {/* Enhanced Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-glow transition-all duration-300 group hover:scale-105">
                <div className="relative">
                  <Zap className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">20% Energy Reduction</h3>
                <p className="text-muted-foreground text-sm">Optimize battery usage with AI-powered prompts</p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-glow transition-all duration-300 group hover:scale-105">
                <div className="relative">
                  <Brain className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart LLM Integration</h3>
                <p className="text-muted-foreground text-sm">GPT-4, Claude, and custom models for EV operations</p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-glow transition-all duration-300 group hover:scale-105">
                <div className="relative">
                  <TreePine className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Built for Clean Mobility</h3>
                <p className="text-muted-foreground text-sm">Designed for eco-tech and sustainable transport</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Demo Section with Nature Background */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                See GreenPrompt in Action
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of sustainable EV optimization with our AI-powered platform
            </p>
          </div>
          
          {/* Demo Interface with Mountain Background */}
          <div className="relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-intense group hover:shadow-glow transition-all duration-500">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img src={greenMountains} alt="Green mountains landscape" className="w-full h-full object-cover" />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-glow">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-accent" />
                    </div>
                    <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <TreePine className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4">AI-Powered EV Fleet Dashboard</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Monitor energy consumption, optimize routes, and reduce carbon footprint 
                    with intelligent prompt engineering and real-time analytics.
                  </p>
                  
                  <Button 
                    onClick={() => navigate('/app')} 
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm group"
                  >
                    <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Try Interactive Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;