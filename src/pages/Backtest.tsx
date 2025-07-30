import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Home, Plus, Play, BarChart3, Settings, LogOut, ArrowLeft, Upload, TrendingUp, TrendingDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AppSidebar = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const menuItems = [
    { title: 'Dashboard', url: '/dashboard', icon: Home },
    { title: 'New Strategy', url: '/new-strategy', icon: Plus },
    { title: 'Backtest', url: '/backtest', icon: Play },
    { title: 'Results', url: '/results/demo', icon: BarChart3 },
    { title: 'Settings', url: '/dashboard', icon: Settings },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">SmartTradeSim</span>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center space-x-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4">
          <Button 
            variant="ghost" 
            onClick={handleSignOut}
            className="w-full justify-start"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

// Sample data for demonstration
const sampleData = [
  { date: '2024-01', price: 45000, portfolio: 10000 },
  { date: '2024-02', price: 48000, portfolio: 10600 },
  { date: '2024-03', price: 42000, portfolio: 9800 },
  { date: '2024-04', price: 47000, portfolio: 11200 },
  { date: '2024-05', price: 52000, portfolio: 12400 },
  { date: '2024-06', price: 49000, portfolio: 11800 },
  { date: '2024-07', price: 54000, portfolio: 13100 },
];

const tradeLog = [
  { id: 1, date: '2024-01-15', action: 'BUY', price: 45200, quantity: 0.1, pnl: 0, signal: 'EMA(5) > EMA(20)' },
  { id: 2, date: '2024-01-28', action: 'SELL', price: 47800, quantity: 0.1, pnl: 260, signal: 'Take Profit' },
  { id: 3, date: '2024-02-10', action: 'BUY', price: 46900, quantity: 0.12, pnl: 0, signal: 'EMA(5) > EMA(20)' },
  { id: 4, date: '2024-02-25', action: 'SELL', price: 48100, quantity: 0.12, pnl: 144, signal: 'EMA(5) < EMA(20)' },
  { id: 5, date: '2024-03-05', action: 'BUY', price: 43200, quantity: 0.15, pnl: 0, signal: 'EMA(5) > EMA(20)' },
];

const Backtest = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const { toast } = useToast();

  const runBacktest = () => {
    if (!selectedStrategy) {
      toast({
        title: 'Error',
        description: 'Please select a strategy first.',
        variant: 'destructive',
      });
      return;
    }

    setIsRunning(true);
    
    // Simulate backtest running
    setTimeout(() => {
      setIsRunning(false);
      setHasResults(true);
      toast({
        title: 'Backtest Complete',
        description: 'Your strategy has been backtested successfully.',
      });
    }, 3000);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <SidebarTrigger className="mb-4" />
            <div className="flex items-center space-x-4 mb-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold mb-2">Backtest Strategy</h1>
            <p className="text-muted-foreground">
              Test your trading strategy against historical market data.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Configuration Panel */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Backtest Configuration</CardTitle>
                  <CardDescription>
                    Set up your backtest parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Strategy</label>
                    <Select value={selectedStrategy} onValueChange={setSelectedStrategy}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a strategy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ema-crossover">EMA Crossover (5/20)</SelectItem>
                        <SelectItem value="rsi-oversold">RSI Oversold</SelectItem>
                        <SelectItem value="sma-strategy">SMA Strategy (10/50)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Initial Capital</label>
                    <Input type="number" placeholder="10000" defaultValue="10000" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Commission (%)</label>
                    <Input type="number" placeholder="0.1" defaultValue="0.1" step="0.01" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Upload Historical Data</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Upload CSV file with OHLCV data
                      </p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Using sample BTC/USD data (Jan-Jul 2024)
                    </p>
                  </div>

                  <Button 
                    onClick={runBacktest} 
                    disabled={isRunning}
                    className="w-full"
                  >
                    {isRunning ? 'Running Backtest...' : 'Run Backtest'}
                  </Button>
                </CardContent>
              </Card>

              {/* Results Summary */}
              {hasResults && (
                <Card>
                  <CardHeader>
                    <CardTitle>Results Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Return</p>
                        <p className="text-2xl font-bold text-green-600">+31.0%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Sharpe Ratio</p>
                        <p className="text-2xl font-bold">1.24</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Win Rate</p>
                        <p className="text-2xl font-bold">68%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Max Drawdown</p>
                        <p className="text-2xl font-bold text-red-600">-12.4%</p>
                      </div>
                    </div>
                    <Link to="/results/demo">
                      <Button variant="outline" className="w-full">
                        View Detailed Results
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Charts and Analysis */}
            <div className="lg:col-span-2 space-y-6">
              {hasResults && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Equity Curve</CardTitle>
                      <CardDescription>
                        Portfolio performance over time
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={sampleData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line 
                              type="monotone" 
                              dataKey="portfolio" 
                              stroke="hsl(var(--primary))" 
                              strokeWidth={2}
                              name="Portfolio Value"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Trade Log</CardTitle>
                      <CardDescription>
                        Recent trade executions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {tradeLog.map((trade) => (
                          <div key={trade.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              {trade.action === 'BUY' ? (
                                <TrendingUp className="h-4 w-4 text-green-600" />
                              ) : (
                                <TrendingDown className="h-4 w-4 text-red-600" />
                              )}
                              <div>
                                <p className="font-medium">{trade.action} {trade.quantity} BTC</p>
                                <p className="text-sm text-muted-foreground">{trade.date}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${trade.price.toLocaleString()}</p>
                              <p className={`text-sm ${trade.pnl > 0 ? 'text-green-600' : trade.pnl < 0 ? 'text-red-600' : 'text-muted-foreground'}`}>
                                {trade.pnl > 0 ? '+' : ''}${trade.pnl}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {/* Live Console */}
              <Card>
                <CardHeader>
                  <CardTitle>Simulation Console</CardTitle>
                  <CardDescription>
                    Live backtest execution log
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/5 dark:bg-white/5 p-4 rounded-lg font-mono text-sm h-40 overflow-y-auto">
                    {isRunning ? (
                      <div className="space-y-1 text-muted-foreground">
                        <p>[INFO] Loading historical data...</p>
                        <p>[INFO] Initializing strategy: EMA Crossover</p>
                        <p>[INFO] Starting backtest simulation...</p>
                        <p>[TRADE] 2024-01-15: BUY signal triggered at $45,200</p>
                        <p>[TRADE] 2024-01-28: SELL signal triggered at $47,800 (+$260)</p>
                        <p className="animate-pulse">[INFO] Processing...</p>
                      </div>
                    ) : hasResults ? (
                      <div className="space-y-1 text-muted-foreground">
                        <p>[INFO] Backtest completed successfully</p>
                        <p>[RESULT] Total trades: 5</p>
                        <p>[RESULT] Winning trades: 4 (80%)</p>
                        <p>[RESULT] Total return: +31.0%</p>
                        <p>[RESULT] Sharpe ratio: 1.24</p>
                        <p className="text-green-600">[SUCCESS] Strategy performance analysis ready</p>
                      </div>
                    ) : (
                      <p className="text-muted-foreground">Ready to run backtest...</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Backtest;