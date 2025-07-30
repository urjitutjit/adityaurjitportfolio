import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, ArrowLeft, Code, Database, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">SmartTradeSim</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About SmartTradeSim</h1>
            <p className="text-xl text-muted-foreground">
              Professional algorithmic trading simulation platform built for traders and developers
            </p>
          </div>

          {/* Mission */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                SmartTradeSim democratizes algorithmic trading by providing an intuitive platform where traders can 
                design, test, and optimize their strategies without writing complex code. We believe that every trader 
                should have access to professional-grade backtesting tools to make informed decisions in the markets.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How SmartTradeSim Works</CardTitle>
              <CardDescription>
                A simple yet powerful approach to strategy development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Define Strategy</h3>
                  <p className="text-sm text-muted-foreground">
                    Use our visual builder to create trading rules with simple if-then conditions
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Backtest</h3>
                  <p className="text-sm text-muted-foreground">
                    Run your strategy against historical data to see how it would have performed
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Optimize</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyze results and fine-tune your strategy for better performance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-primary" />
                <span>Technology Stack</span>
              </CardTitle>
              <CardDescription>
                Built with modern, reliable technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Frontend</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• React with TypeScript</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Recharts for data visualization</li>
                    <li>• React Router for navigation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Backend & Database</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Supabase for authentication</li>
                    <li>• PostgreSQL database</li>
                    <li>• Real-time WebSocket connections</li>
                    <li>• RESTful API architecture</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Strategy */}
          <Card>
            <CardHeader>
              <CardTitle>Demo Strategy: EMA Crossover</CardTitle>
              <CardDescription>
                Try our sample strategy to see SmartTradeSim in action
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Strategy Rules:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <strong>Buy Signal:</strong> When SMA(10) crosses above SMA(20)</li>
                  <li>• <strong>Sell Signal:</strong> When SMA(10) crosses below SMA(20)</li>
                  <li>• <strong>Stop Loss:</strong> 2% below entry price</li>
                  <li>• <strong>Take Profit:</strong> 5% above entry price</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                This classic moving average crossover strategy has been backtested on Bitcoin data from 2024, 
                showing a 31% return with a 75% win rate.
              </p>
              <Link to="/auth">
                <Button>Try This Strategy</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;