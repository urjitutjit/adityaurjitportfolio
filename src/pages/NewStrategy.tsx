import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Home, Plus, Play, BarChart3, Settings, LogOut, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

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

const strategySchema = z.object({
  name: z.string().min(1, 'Strategy name is required'),
  description: z.string().optional(),
  indicator1: z.string().min(1, 'First indicator is required'),
  period1: z.string().min(1, 'Period is required'),
  condition: z.string().min(1, 'Condition is required'),
  indicator2: z.string().min(1, 'Second indicator is required'),
  period2: z.string().min(1, 'Period is required'),
  action: z.string().min(1, 'Action is required'),
  stopLoss: z.string().optional(),
  takeProfit: z.string().optional(),
});

type StrategyFormValues = z.infer<typeof strategySchema>;

const NewStrategy = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<StrategyFormValues>({
    resolver: zodResolver(strategySchema),
    defaultValues: {
      name: '',
      description: '',
      indicator1: '',
      period1: '',
      condition: '',
      indicator2: '',
      period2: '',
      action: '',
      stopLoss: '',
      takeProfit: '',
    },
  });

  const onSubmit = (data: StrategyFormValues) => {
    console.log('Strategy data:', data);
    toast({
      title: 'Strategy Created',
      description: `${data.name} has been saved successfully.`,
    });
    navigate('/dashboard');
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
            <h1 className="text-3xl font-bold mb-2">Create New Strategy</h1>
            <p className="text-muted-foreground">
              Build your trading strategy using simple if-then rules.
            </p>
          </div>

          <div className="max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Strategy Builder</CardTitle>
                <CardDescription>
                  Define your trading rules using technical indicators and conditions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Strategy Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., EMA Crossover" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your strategy..."
                                className="resize-none"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Strategy Rule */}
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Trading Rule</h3>
                      <div className="grid md:grid-cols-7 gap-4 items-end">
                        <div className="col-span-1">
                          <FormField
                            control={form.control}
                            name="indicator1"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>IF</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Indicator" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="EMA">EMA</SelectItem>
                                    <SelectItem value="SMA">SMA</SelectItem>
                                    <SelectItem value="RSI">RSI</SelectItem>
                                    <SelectItem value="MACD">MACD</SelectItem>
                                    <SelectItem value="Price">Price</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="col-span-1">
                          <FormField
                            control={form.control}
                            name="period1"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Period</FormLabel>
                                <FormControl>
                                  <Input placeholder="5" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="col-span-1">
                          <FormField
                            control={form.control}
                            name="condition"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Condition</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder=">" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value=">">&gt;</SelectItem>
                                    <SelectItem value="<">&lt;</SelectItem>
                                    <SelectItem value=">=">&gt;=</SelectItem>
                                    <SelectItem value="<=">&lt;=</SelectItem>
                                    <SelectItem value="crosses_above">Crosses Above</SelectItem>
                                    <SelectItem value="crosses_below">Crosses Below</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="col-span-1">
                          <FormField
                            control={form.control}
                            name="indicator2"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Compare To</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Indicator" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="EMA">EMA</SelectItem>
                                    <SelectItem value="SMA">SMA</SelectItem>
                                    <SelectItem value="RSI">RSI</SelectItem>
                                    <SelectItem value="MACD">MACD</SelectItem>
                                    <SelectItem value="Price">Price</SelectItem>
                                    <SelectItem value="Value">Fixed Value</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="col-span-1">
                          <FormField
                            control={form.control}
                            name="period2"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Period/Value</FormLabel>
                                <FormControl>
                                  <Input placeholder="20" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="col-span-1">
                          <FormField
                            control={form.control}
                            name="action"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>THEN</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Action" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="BUY">BUY</SelectItem>
                                    <SelectItem value="SELL">SELL</SelectItem>
                                    <SelectItem value="CLOSE">CLOSE</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="col-span-1">
                          <p className="text-sm text-muted-foreground mt-6">
                            Example: IF EMA(5) &gt; EMA(20) THEN BUY
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Risk Management */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="stopLoss"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stop Loss (%)</FormLabel>
                            <FormControl>
                              <Input placeholder="2" type="number" {...field} />
                            </FormControl>
                            <FormDescription>
                              Maximum loss percentage before closing position
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="takeProfit"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Take Profit (%)</FormLabel>
                            <FormControl>
                              <Input placeholder="5" type="number" {...field} />
                            </FormControl>
                            <FormDescription>
                              Target profit percentage before closing position
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex space-x-4">
                      <Button type="submit">Save Strategy</Button>
                      <Link to="/dashboard">
                        <Button variant="outline">Cancel</Button>
                      </Link>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default NewStrategy;