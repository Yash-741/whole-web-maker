import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkflowSteps from "@/components/WorkflowSteps";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="workflow">
          <WorkflowSteps />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="technology">
          <TechStack />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;