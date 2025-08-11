import { Card } from "@/components/ui/card";
import { 
  Database, 
  RefreshCw, 
  Brain, 
  Upload, 
  BarChart3, 
  Monitor,
  Globe
} from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Source",
    subtitle: "SQL Server / CSV",
    description: "Connect to multiple data sources including SQL Server databases and CSV files",
    color: "text-blue-600"
  },
  {
    icon: RefreshCw,
    title: "Extract & Clean Data",
    subtitle: "Data Processing",
    description: "Automated data extraction and cleaning processes ensure data quality",
    color: "text-green-600"
  },
  {
    icon: Brain,
    title: "Python ETL & Forecasting",
    subtitle: "pandas, scikit-learn",
    description: "Advanced machine learning forecasting using Python's powerful data science libraries",
    color: "text-purple-600"
  },
  {
    icon: Upload,
    title: "Push Dataset / Direct Query",
    subtitle: "Data Transfer",
    description: "Seamlessly push processed datasets or enable direct querying for real-time insights",
    color: "text-orange-600"
  },
  {
    icon: BarChart3,
    title: "Power BI Dashboard",
    subtitle: "Charts, KPIs, Maps",
    description: "Create stunning visualizations with interactive charts, KPIs, and geographic maps",
    color: "text-primary"
  },
  {
    icon: Monitor,
    title: "Embed via SDK / iFrame",
    subtitle: "Integration Options",
    description: "Flexible embedding options using SDK or iFrame for seamless integration",
    color: "text-teal-600"
  },
  {
    icon: Globe,
    title: "ASP.NET Core Web App",
    subtitle: "Login, Embed Report",
    description: "Complete web application with secure login and embedded reporting capabilities",
    color: "text-red-600"
  }
];

const WorkflowSteps = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-data-light/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Data Analytics
            <span className="gradient-text block">Workflow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive 7-step process transforms raw data into actionable business insights
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 border-0 group cursor-pointer"
                >
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                      {index + 1}
                    </div>
                    <Icon className={`w-8 h-8 ${step.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connection line for larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </Card>
              );
            })}
          </div>
          
          {/* Mobile flow indicators */}
          <div className="xl:hidden flex justify-center mt-8">
            <div className="flex items-center gap-2">
              {steps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  {index < steps.length - 1 && (
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-primary/30 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;