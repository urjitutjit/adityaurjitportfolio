import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Play, 
  Save, 
  Download, 
  BarChart3, 
  Clock, 
  DollarSign, 
  Zap,
  Copy,
  RefreshCw,
  Settings,
  FileText
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PromptWorkspace = () => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState(`Analyze the EV battery usage for a delivery route with the following parameters:
- Distance: 150 km
- Vehicle load: 80% capacity
- Weather conditions: Moderate rain
- Temperature: 15°C

Provide recommendations for:
1. Optimal charging schedule
2. Energy-saving driving techniques
3. Predicted battery consumption`);
  
  const [model, setModel] = useState("gpt-4");
  const [temperature, setTemperature] = useState([0.7]);
  const [maxTokens, setMaxTokens] = useState([500]);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [metrics, setMetrics] = useState({
    latency: 0,
    tokens: 0,
    cost: 0,
    score: 0
  });

  const handleRunPrompt = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResponse = `# EV Battery Optimization Analysis

## Current Route Assessment
- **Distance**: 150 km
- **Estimated consumption**: 24.5 kWh
- **Battery efficiency**: 163 Wh/km under current conditions

## Recommendations

### 1. Optimal Charging Schedule
- Pre-trip charge to 95% (recommended starting level)
- Mid-route charging not required for this distance
- Post-trip charge immediately if battery drops below 20%

### 2. Energy-Saving Techniques
- Maintain speed between 45-65 km/h for optimal efficiency
- Use eco-mode driving in rain conditions
- Minimize use of heating - use seat warmers instead
- Plan route to avoid steep inclines where possible

### 3. Predicted Consumption
- **Base consumption**: 22.8 kWh
- **Weather adjustment**: +1.7 kWh (rain/temperature)
- **Total predicted**: 24.5 kWh
- **Remaining battery**: ~71% upon arrival

### 4. Carbon Impact
- **CO₂ savings vs ICE vehicle**: 12.4 kg CO₂
- **Grid carbon intensity**: 0.4 kg CO₂/kWh
- **Net environmental benefit**: 87% reduction`;

      setResponse(mockResponse);
      setMetrics({
        latency: 1.2,
        tokens: 234,
        cost: 0.0047,
        score: 8.7
      });
      setIsLoading(false);
      
      toast({
        title: "Prompt executed successfully",
        description: "Generated optimized EV battery recommendations",
      });
    }, 2000);
  };

  const handleSavePrompt = () => {
    toast({
      title: "Prompt saved",
      description: "Your prompt has been saved to your library",
    });
  };

  const handleExport = () => {
    toast({
      title: "Exporting...",
      description: "Generating API endpoint documentation",
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold">Prompt Workspace</h1>
              <p className="text-muted-foreground">Create, test, and optimize prompts for EV operations</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSavePrompt}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="flex items-center p-4">
                <Clock className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Latency</p>
                  <p className="font-semibold">{metrics.latency}s</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center p-4">
                <FileText className="h-8 w-8 text-accent mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Tokens</p>
                  <p className="font-semibold">{metrics.tokens}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center p-4">
                <DollarSign className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Cost</p>
                  <p className="font-semibold">${metrics.cost}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center p-4">
                <BarChart3 className="h-8 w-8 text-accent mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Score</p>
                  <p className="font-semibold">{metrics.score}/10</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Prompt Editor */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Prompt Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Model Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="model">Model</Label>
                    <Select value={model} onValueChange={setModel}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpt-4">GPT-4</SelectItem>
                        <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                        <SelectItem value="claude-3">Claude 3</SelectItem>
                        <SelectItem value="llama-2">Llama 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Temperature: {temperature[0]}</Label>
                    <Slider
                      value={temperature}
                      onValueChange={setTemperature}
                      max={1}
                      min={0}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label>Max Tokens: {maxTokens[0]}</Label>
                  <Slider
                    value={maxTokens}
                    onValueChange={setMaxTokens}
                    max={2000}
                    min={50}
                    step={50}
                    className="mt-2"
                  />
                </div>

                <Separator />

                {/* Prompt Editor */}
                <div>
                  <Label htmlFor="prompt">Prompt</Label>
                  <Textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[200px] font-mono text-sm"
                    placeholder="Enter your prompt here..."
                  />
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={handleRunPrompt} 
                    disabled={isLoading}
                    className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
                  >
                    {isLoading ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Play className="h-4 w-4 mr-2" />
                    )}
                    {isLoading ? "Running..." : "Run Prompt"}
                  </Button>
                  <Button variant="outline">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Panel */}
            <Card>
              <CardHeader>
                <CardTitle>Response</CardTitle>
                <CardDescription>AI-generated recommendations and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                {response ? (
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="whitespace-pre-wrap text-sm font-mono">{response}</pre>
                  </div>
                ) : (
                  <div className="bg-muted rounded-lg p-8 text-center text-muted-foreground">
                    <Zap className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Run a prompt to see the AI response here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Tools & Templates */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setPrompt("Optimize battery charging schedule for EV fleet with 50 vehicles...")}
                >
                  🔋 Battery Optimizer
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setPrompt("Calculate CO₂ footprint for delivery route with parameters...")}
                >
                  🌍 Carbon Calculator
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setPrompt("Generate optimal route for EV fleet considering traffic and energy...")}
                >
                  🚛 Route Planner
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>A/B Testing</CardTitle>
                <CardDescription>Compare two prompts side by side</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Start A/B Test
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Accuracy</span>
                    <Badge variant="outline">87%</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Relevance</span>
                    <Badge variant="outline">92%</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Efficiency</span>
                    <Badge variant="outline">85%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptWorkspace;