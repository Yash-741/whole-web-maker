import { Card } from "@/components/ui/card";

const technologies = [
  {
    name: "SQL Server",
    category: "Database",
    description: "Enterprise-grade relational database management system",
    logo: "🗄️"
  },
  {
    name: "Python",
    category: "Data Processing",
    description: "Powerful programming language for data science and machine learning",
    logo: "🐍"
  },
  {
    name: "Pandas",
    category: "Data Analysis",
    description: "Fast, powerful data structures and analysis tools",
    logo: "🐼"
  },
  {
    name: "Scikit-learn",
    category: "Machine Learning",
    description: "Simple and efficient tools for predictive data analysis",
    logo: "🧠"
  },
  {
    name: "Power BI",
    category: "Business Intelligence",
    description: "Business analytics tool for visualizing and sharing insights",
    logo: "📊"
  },
  {
    name: "ASP.NET Core",
    category: "Web Framework",
    description: "Cross-platform, high-performance framework for modern web applications",
    logo: "🌐"
  }
];

const TechStack = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by
            <span className="gradient-text block">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge technologies and frameworks trusted by enterprises worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 border-0 group cursor-pointer hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  {tech.category}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional features */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-gradient-card rounded-2xl shadow-card">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Real-time Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Scalable Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;