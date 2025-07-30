import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  Github,
  Linkedin,
  ExternalLink,
  Send,
  Leaf
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    demoType: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo request submitted!",
      description: "We'll contact you within 24 hours to schedule your GreenPrompt demo.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      demoType: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "hello@greenprompt.ai",
      link: "mailto:hello@greenprompt.ai"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Support",
      value: "support@greenprompt.ai",
      link: "mailto:support@greenprompt.ai"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Sales",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "Open Source",
      link: "https://github.com/greenprompt"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "Company Page",
      link: "https://linkedin.com/company/greenprompt"
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      title: "Green Rider",
      value: "Partner Platform",
      link: "https://greenrider.tech"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Leaf className="h-3 w-3 mr-1" />
            Contact
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Request{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Enterprise Demo
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to optimize your EV operations with AI? Get a personalized demo 
            and see how GreenPrompt can reduce your energy costs by 20%.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule Your Demo</CardTitle>
                <CardDescription>
                  Tell us about your EV operations and we'll customize a demo for your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company / Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Green Tech Solutions"
                    />
                  </div>

                  <div>
                    <Label htmlFor="demoType">Demo Type</Label>
                    <Select value={formData.demoType} onValueChange={(value) => handleInputChange("demoType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select demo type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fleet-management">Fleet Management Demo</SelectItem>
                        <SelectItem value="battery-optimization">Battery Optimization Demo</SelectItem>
                        <SelectItem value="route-planning">Route Planning Demo</SelectItem>
                        <SelectItem value="carbon-tracking">Carbon Tracking Demo</SelectItem>
                        <SelectItem value="full-platform">Full Platform Demo</SelectItem>
                        <SelectItem value="custom">Custom Demo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your EV operations</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe your fleet size, current challenges, and what you'd like to optimize..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Multiple ways to reach our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{contact.title}</p>
                      <p className="text-muted-foreground text-sm">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Response Time</p>
                    <p className="text-muted-foreground text-sm">Within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-sm">Location</p>
                    <p className="text-muted-foreground text-sm">Global (Remote-first)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Availability</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{social.title}</p>
                      <p className="text-muted-foreground text-sm">{social.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* API Access */}
            <Card className="bg-gradient-card border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Enterprise API Access</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Integrate GreenPrompt directly into your EV management systems
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Request API Keys
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="mt-16">
          <Card className="bg-card border border-border">
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Enterprise Features</h2>
                <p className="text-muted-foreground">
                  Additional capabilities available for enterprise customers
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Custom Models</h3>
                  <p className="text-sm text-muted-foreground">
                    Fine-tuned AI models for your specific EV operations
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">White-label Solution</h3>
                  <p className="text-sm text-muted-foreground">
                    Branded interface for your customers and partners
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated support team for mission-critical operations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;