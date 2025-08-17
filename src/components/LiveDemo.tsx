import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Database, 
  Upload, 
  Zap, 
  TrendingUp, 
  Download,
  Play,
  RefreshCw,
  CheckCircle
} from "lucide-react";

const LiveDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    { title: "Data Upload", icon: Upload, color: "text-blue-500" },
    { title: "ETL Processing", icon: Zap, color: "text-yellow-500" },
    { title: "ML Analysis", icon: TrendingUp, color: "text-green-500" },
    { title: "Visualization", icon: BarChart3, color: "text-purple-500" }
  ];

  const sampleData = [
    { month: "Jan", sales: 4500, forecast: 4800 },
    { month: "Feb", sales: 5200, forecast: 5100 },
    { month: "Mar", sales: 4800, forecast: 5300 },
    { month: "Apr", sales: 6100, forecast: 5900 },
    { month: "May", sales: 5900, forecast: 6200 },
    { month: "Jun", sales: 6800, forecast: 6500 }
  ];

  const runDemo = () => {
    setIsRunning(true);
    setProgress(0);
    setActiveStep(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          setActiveStep(3);
          return 100;
        }
        
        // Update active step based on progress
        if (newProgress >= 75) setActiveStep(3);
        else if (newProgress >= 50) setActiveStep(2);
        else if (newProgress >= 25) setActiveStep(1);
        
        return newProgress;
      });
    }, 100);
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Live Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience our complete analytics pipeline in action. From data ingestion to intelligent forecasting.
          </p>
          <Button 
            onClick={runDemo} 
            disabled={isRunning}
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            {isRunning ? (
              <>
                <RefreshCw className="mr-2 w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Play className="mr-2 w-5 h-5" />
                Start Demo
              </>
            )}
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="pipeline" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="pipeline">Analytics Pipeline</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="pipeline" className="space-y-8">
              {/* Progress Bar */}
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-6 h-6 text-primary" />
                    Processing Pipeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <Progress value={progress} className="w-full h-3" />
                    
                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = index === activeStep;
                        const isCompleted = index < activeStep || (progress === 100 && index === 3);
                        
                        return (
                          <div 
                            key={step.title}
                            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                              isActive 
                                ? 'border-primary bg-primary/10 animate-glow' 
                                : isCompleted 
                                  ? 'border-green-500 bg-green-500/10'
                                  : 'border-muted bg-background'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {isCompleted ? (
                                <CheckCircle className="w-6 h-6 text-green-500" />
                              ) : (
                                <Icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                              )}
                              <div>
                                <h3 className="font-semibold text-sm">{step.title}</h3>
                                <p className="text-xs text-muted-foreground">
                                  {isCompleted ? 'Complete' : isActive ? 'Processing...' : 'Pending'}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Data Sources */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-elevated transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">SQL Server</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Tables:</span>
                        <span className="font-semibold">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Records:</span>
                        <span className="font-semibold">2.4M</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="text-green-500 font-semibold">Connected</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-elevated transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">CSV Files</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Files:</span>
                        <span className="font-semibold">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="font-semibold">450MB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="text-green-500 font-semibold">Ready</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-elevated transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">API Sources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Endpoints:</span>
                        <span className="font-semibold">5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-semibold">Real-time</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="text-green-500 font-semibold">Active</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Chart Simulation */}
                <Card className="col-span-1 lg:col-span-2 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-6 h-6 text-primary" />
                      Sales vs Forecast
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-end justify-between gap-2 p-4">
                      {sampleData.map((item, index) => (
                        <div key={item.month} className="flex flex-col items-center gap-2 flex-1">
                          <div className="flex gap-1 items-end h-32">
                            <div 
                              className="bg-primary rounded-t min-w-[20px] transition-all duration-1000 delay-300"
                              style={{ 
                                height: `${(item.sales / 7000) * 100}%`,
                                animationDelay: `${index * 100}ms`
                              }}
                            />
                            <div 
                              className="bg-accent rounded-t min-w-[20px] transition-all duration-1000 delay-500"
                              style={{ 
                                height: `${(item.forecast / 7000) * 100}%`,
                                animationDelay: `${index * 100 + 200}ms`
                              }}
                            />
                          </div>
                          <span className="text-xs font-medium">{item.month}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded"></div>
                        <span className="text-sm">Actual Sales</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-accent rounded"></div>
                        <span className="text-sm">ML Forecast</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* KPI Cards */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Revenue Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-500 mb-2">+24.5%</div>
                    <p className="text-sm text-muted-foreground">vs last quarter</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Forecast Accuracy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">94.2%</div>
                    <p className="text-sm text-muted-foreground">ML model performance</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>🔮 AI Predictions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Next Quarter Outlook</h4>
                      <p className="text-sm text-muted-foreground">
                        Based on seasonal trends and recent performance, expect 15% growth in Q3.
                      </p>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Risk Assessment</h4>
                      <p className="text-sm text-muted-foreground">
                        Low risk detected. Market conditions remain favorable for continued growth.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>🎯 Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-500/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Optimization Opportunity</h4>
                      <p className="text-sm text-muted-foreground">
                        Consider increasing marketing spend in Region B for +8% potential uplift.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-500/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Data Quality</h4>
                      <p className="text-sm text-muted-foreground">
                        Excellent data completeness (99.7%). Ready for advanced analytics.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-6 h-6 text-primary" />
                    Export Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Power BI Report
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Excel Dashboard
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      PDF Summary
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;