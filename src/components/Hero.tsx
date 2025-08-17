import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Database, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-card rounded-full px-6 py-2 mb-8 shadow-card border">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Next-Generation Data Analytics Platform</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="gradient-text block">Data Journey</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            From raw data sources to powerful insights with our complete ETL, forecasting, 
            and business intelligence solution
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-glow">
              Start Your Analytics Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-primary/10 transition-all duration-300" asChild>
              <a href="#demo">View Live Demo</a>
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 animate-float">
              <Database className="w-8 h-8 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">Multi-Source ETL</h3>
                <p className="text-muted-foreground">SQL Server, CSV & More</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 animate-float delay-200">
              <TrendingUp className="w-8 h-8 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">ML Forecasting</h3>
                <p className="text-muted-foreground">Python & Scikit-learn</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 animate-float delay-400">
              <BarChart3 className="w-8 h-8 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">Power BI Integration</h3>
                <p className="text-muted-foreground">Charts, KPIs & Maps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;