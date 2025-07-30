import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Battery, 
  Globe, 
  Truck, 
  Zap, 
  Leaf, 
  Route, 
  Search,
  Filter,
  Star,
  Download,
  Play
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Templates = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const templates = [
    {
      id: 1,
      title: "Battery Life Extender",
      description: "Optimize charging cycles and usage patterns to maximize EV battery lifespan and efficiency.",
      icon: <Battery className="h-6 w-6" />,
      category: "Battery Management",
      difficulty: "Beginner",
      rating: 4.8,
      uses: 1205,
      tags: ["charging", "longevity", "optimization"],
      color: "text-primary",
      prompt: "Analyze battery usage patterns and provide recommendations for extending battery life..."
    },
    {
      id: 2,
      title: "CO₂ Footprint Calculator",
      description: "Calculate and predict carbon emissions for EV operations compared to traditional vehicles.",
      icon: <Globe className="h-6 w-6" />,
      category: "Environmental",
      difficulty: "Intermediate",
      rating: 4.9,
      uses: 892,
      tags: ["carbon", "emissions", "sustainability"],
      color: "text-accent",
      prompt: "Calculate the carbon footprint for the following EV operation parameters..."
    },
    {
      id: 3,
      title: "Route Optimization for EV Fleets",
      description: "Plan optimal routes considering charging stations, traffic, and energy consumption.",
      icon: <Route className="h-6 w-6" />,
      category: "Fleet Management",
      difficulty: "Advanced",
      rating: 4.7,
      uses: 674,
      tags: ["routing", "fleet", "charging-stations"],
      color: "text-primary",
      prompt: "Optimize route planning for EV fleet with the following constraints..."
    },
    {
      id: 4,
      title: "Energy Consumption Predictor",
      description: "Predict energy usage based on route, weather, load, and driving conditions.",
      icon: <Zap className="h-6 w-6" />,
      category: "Energy Analysis",
      difficulty: "Intermediate",
      rating: 4.6,
      uses: 543,
      tags: ["prediction", "energy", "analysis"],
      color: "text-accent",
      prompt: "Predict energy consumption for the planned trip with given parameters..."
    },
    {
      id: 5,
      title: "Eco-Driving Assistant",
      description: "Provide real-time driving tips to minimize energy consumption and maximize efficiency.",
      icon: <Leaf className="h-6 w-6" />,
      category: "Driving Optimization",
      difficulty: "Beginner",
      rating: 4.5,
      uses: 789,
      tags: ["eco-driving", "efficiency", "tips"],
      color: "text-primary",
      prompt: "Provide eco-driving recommendations for current driving conditions..."
    },
    {
      id: 6,
      title: "Fleet Maintenance Scheduler",
      description: "Schedule maintenance for EV fleets based on usage patterns and predictive analytics.",
      icon: <Truck className="h-6 w-6" />,
      category: "Maintenance",
      difficulty: "Advanced",
      rating: 4.4,
      uses: 321,
      tags: ["maintenance", "scheduling", "fleet"],
      color: "text-accent",
      prompt: "Generate maintenance schedule for EV fleet based on usage data..."
    }
  ];

  const categories = ["All", "Battery Management", "Environmental", "Fleet Management", "Energy Analysis", "Driving Optimization", "Maintenance"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const useTemplate = (template: any) => {
    // In a real app, this would pass the template data to the workspace
    navigate('/app', { state: { template } });
  };

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Leaf className="h-3 w-3 mr-1" />
            Templates
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Domain-Specific{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Prompt Templates
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pre-built, tested prompts for EV optimization, battery management, and sustainable operations
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search templates, tags, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-hero" : ""}
              >
                <Filter className="h-3 w-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="group hover:shadow-glow transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`${template.color} mb-3 group-hover:scale-110 transition-transform`}>
                    {template.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {template.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{template.title}</CardTitle>
                <CardDescription className="text-sm">
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    {template.rating}
                  </div>
                  <span>{template.uses} uses</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {template.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-hero hover:shadow-glow transition-all duration-300"
                    onClick={() => useTemplate(template)}
                  >
                    <Play className="h-3 w-3 mr-1" />
                    Use Template
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section */}
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Featured: EV Fleet Templates</h2>
            <p className="text-muted-foreground">
              Templates specifically designed for clean mobility and EV fleet optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Battery className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Golf Cart Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized prompts for golf cart battery management
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Route className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Campus Route Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Optimize routes for campus and resort environments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Need a Custom Template?</h3>
          <p className="text-muted-foreground mb-6">
            Our team can create specialized prompts for your specific EV operations
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/contact')}
          >
            Request Custom Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Templates;