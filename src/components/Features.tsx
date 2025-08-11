import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Shield, 
  Gauge, 
  Users, 
  Cloud, 
  Smartphone,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast ETL",
    description: "Process massive datasets in minutes, not hours. Our optimized Python ETL pipeline handles complex transformations with ease.",
    benefits: ["10x faster processing", "Automated data cleaning", "Error handling & validation"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with role-based access control, data encryption, and audit trails for complete peace of mind.",
    benefits: ["AES-256 encryption", "SSO integration", "Compliance ready"]
  },
  {
    icon: Gauge,
    title: "Real-time Analytics",
    description: "Get instant insights with live dashboards, real-time data streaming, and automated alert systems.",
    benefits: ["Live data streaming", "Instant notifications", "Zero-latency queries"]
  },
  {
    icon: Users,
    title: "Collaborative Workspaces",
    description: "Share insights across teams with collaborative dashboards, commenting, and role-based permissions.",
    benefits: ["Team collaboration", "Shared dashboards", "Comment & annotations"]
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Built for the cloud with auto-scaling, high availability, and seamless integration with your existing infrastructure.",
    benefits: ["Auto-scaling", "99.9% uptime SLA", "Hybrid cloud support"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Access your data anywhere with our responsive web app and native mobile experience.",
    benefits: ["Mobile responsive", "Offline capabilities", "Touch-optimized UI"]
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-data-light/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="gradient-text block">Data Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive features designed to accelerate your data analytics journey from inception to insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 border-0 group cursor-pointer h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Icon and title */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-hero rounded-3xl shadow-elevated">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Data?
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Join thousands of businesses already using our platform to drive data-driven decisions
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-semibold"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;