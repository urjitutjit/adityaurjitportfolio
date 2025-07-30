import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Home, Plus, Play, BarChart3, Settings, LogOut, ArrowLeft, Download, TrendingUp, TrendingDown } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

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

// Sample detailed results data
const equityCurve = [
  { date: '2024-01', portfolio: 10000, benchmark: 10000 },
  { date: '2024-02', portfolio: 10600, benchmark: 10400 },
  { date: '2024-03', portfolio: 9800, benchmark: 9200 },
  { date: '2024-04', portfolio: 11200, benchmark: 10300 },
  { date: '2024-05', portfolio: 12400, benchmark: 11500 },
  { date: '2024-06', portfolio: 11800, benchmark: 10800 },
  { date: '2024-07', portfolio: 13100, benchmark: 11900 },
];

const monthlyReturns = [
  { month: 'Jan', return: 6.0 },
  { month: 'Feb', return: -7.5 },
  { month: 'Mar', return: 14.3 },
  { month: 'Apr', return: 10.7 },
  { month: 'May', return: -4.8 },
  { month: 'Jun', return: 11.0 },
];

const detailedTrades = [
  { id: 1, date: '2024-01-15', action: 'BUY', price: 45200, quantity: 0.1, pnl: 0, signal: 'EMA(5) > EMA(20)', commission: 4.52 },
  { id: 2, date: '2024-01-28', action: 'SELL', price: 47800, quantity: 0.1, pnl: 260, signal: 'Take Profit', commission: 4.78 },
  { id: 3, date: '2024-02-10', action: 'BUY', price: 46900, quantity: 0.12, pnl: 0, signal: 'EMA(5) > EMA(20)', commission: 5.63 },
  { id: 4, date: '2024-02-25', action: 'SELL', price: 48100, quantity: 0.12, pnl: 144, signal: 'EMA(5) < EMA(20)', commission: 5.77 },
  { id: 5, date: '2024-03-05', action: 'BUY', price: 43200, quantity: 0.15, pnl: 0, signal: 'EMA(5) > EMA(20)', commission: 6.48 },
  { id: 6, date: '2024-03-18', action: 'SELL', price: 44800, quantity: 0.15, pnl: 240, signal: 'Stop Loss', commission: 6.72 },
  { id: 7, date: '2024-04-02', action: 'BUY', price: 47500, quantity: 0.13, pnl: 0, signal: 'EMA(5) > EMA(20)', commission: 6.18 },
  { id: 8, date: '2024-04-20', action: 'SELL', price: 51200, quantity: 0.13, pnl: 481, signal: 'Take Profit', commission: 6.66 },
];

const Results = () => {
  const { id } = useParams();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <SidebarTrigger className="mb-4" />
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Dashboard
                  </Button>
                </Link>
              </div>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
            </div>
            <h1 className="text-3xl font-bold mb-2">Backtest Results</h1>
            <p className="text-muted-foreground">
              Detailed analysis for EMA Crossover Strategy (5/20) - {id}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Return</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">+31.0%</div>
                <p className="text-xs text-muted-foreground">vs Benchmark: +19.0%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sharpe Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.24</div>
                <p className="text-xs text-muted-foreground">Risk-adjusted returns</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Win Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
                <p className="text-xs text-muted-foreground">6 of 8 trades profitable</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Max Drawdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">-12.4%</div>
                <p className="text-xs text-muted-foreground">Peak to trough loss</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Equity Curve */}
            <Card>
              <CardHeader>
                <CardTitle>Equity Curve</CardTitle>
                <CardDescription>
                  Strategy performance vs benchmark
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={equityCurve}>
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
                        name="Strategy"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="benchmark" 
                        stroke="hsl(var(--muted-foreground))" 
                        strokeWidth={1}
                        strokeDasharray="5 5"
                        name="Buy & Hold"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Returns */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Returns</CardTitle>
                <CardDescription>
                  Performance breakdown by month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyReturns}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar 
                        dataKey="return" 
                        fill="hsl(var(--primary))"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Statistics */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Risk Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Volatility</span>
                  <span className="font-medium">18.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Value at Risk (95%)</span>
                  <span className="font-medium">-4.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Beta</span>
                  <span className="font-medium">0.82</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Alpha</span>
                  <span className="font-medium">0.12</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trade Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Trades</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Average Trade</span>
                  <span className="font-medium text-green-600">+$141.25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Best Trade</span>
                  <span className="font-medium text-green-600">+$481</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Worst Trade</span>
                  <span className="font-medium text-red-600">-$240</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Commissions</span>
                  <span className="font-medium">$47.54</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Commission Rate</span>
                  <span className="font-medium">0.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Net Profit</span>
                  <span className="font-medium text-green-600">$1,082.46</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Profit Factor</span>
                  <span className="font-medium">2.85</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trade Log */}
          <Card>
            <CardHeader>
              <CardTitle>Complete Trade Log</CardTitle>
              <CardDescription>
                All trades executed during the backtest period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">Action</th>
                      <th className="text-left p-2">Price</th>
                      <th className="text-left p-2">Quantity</th>
                      <th className="text-left p-2">Commission</th>
                      <th className="text-left p-2">P&L</th>
                      <th className="text-left p-2">Signal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailedTrades.map((trade) => (
                      <tr key={trade.id} className="border-b">
                        <td className="p-2">{trade.date}</td>
                        <td className="p-2">
                          <div className="flex items-center space-x-2">
                            {trade.action === 'BUY' ? (
                              <TrendingUp className="h-4 w-4 text-green-600" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-red-600" />
                            )}
                            <span className={trade.action === 'BUY' ? 'text-green-600' : 'text-red-600'}>
                              {trade.action}
                            </span>
                          </div>
                        </td>
                        <td className="p-2">${trade.price.toLocaleString()}</td>
                        <td className="p-2">{trade.quantity}</td>
                        <td className="p-2">${trade.commission}</td>
                        <td className={`p-2 ${trade.pnl > 0 ? 'text-green-600' : trade.pnl < 0 ? 'text-red-600' : 'text-muted-foreground'}`}>
                          {trade.pnl > 0 ? '+' : ''}${trade.pnl}
                        </td>
                        <td className="p-2 text-sm text-muted-foreground">{trade.signal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Results;