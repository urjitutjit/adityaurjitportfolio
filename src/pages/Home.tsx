import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart3, Brain, TrendingUp, Shield, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SmartTradeSim
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/auth">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button size="sm">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary/60 bg-clip-text text-transparent">
            Welcome to SmartTradeSim
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Your Personal Algorithmic Trading Lab
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Backtest your trading ideas, simulate market conditions, and optimize your edge – all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="px-8 py-3 text-lg group">
                Try Simulator
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                View Demo Strategy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose SmartTradeSim?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade backtesting tools designed for both beginners and experienced traders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <Brain className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Strategy Builder</CardTitle>
              <CardDescription>
                Create trading strategies with simple if-then rules. No coding required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Visual rule builder</li>
                <li>• Technical indicators</li>
                <li>• Multiple conditions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Advanced Backtesting</CardTitle>
              <CardDescription>
                Test your strategies on historical data with real market conditions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Historical data analysis</li>
                <li>• Realistic spreads & fees</li>
                <li>• Live simulation viewer</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>
                Comprehensive metrics to evaluate and optimize your strategies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Sharpe ratio & drawdown</li>
                <li>• Win rate analysis</li>
                <li>• Risk-adjusted returns</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Risk Management</CardTitle>
              <CardDescription>
                Built-in risk controls and position sizing for safer trading.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Stop loss & take profit</li>
                <li>• Position sizing rules</li>
                <li>• Maximum drawdown limits</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <Zap className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Real-time Simulation</CardTitle>
              <CardDescription>
                Watch your strategies execute in real-time with live market data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• WebSocket streaming</li>
                <li>• Live trade execution</li>
                <li>• Real-time P&L updates</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Interactive Charts</CardTitle>
              <CardDescription>
                Professional charting with buy/sell signals and equity curves.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• OHLCV candlestick charts</li>
                <li>• Technical indicators overlay</li>
                <li>• Trade entry/exit markers</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-y border-border/50">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Trading Smarter?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are already using SmartTradeSim to improve their trading performance.
          </p>
          <Link to="/auth">
            <Button size="lg" className="px-12 py-4 text-lg">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">SmartTradeSim</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 SmartTradeSim. Built with React, TypeScript & Supabase.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;