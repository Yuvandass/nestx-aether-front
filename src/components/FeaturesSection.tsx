
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Layers, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast AI processing with our quantum-optimized algorithms that deliver results in milliseconds."
  },
  {
    icon: Layers,
    title: "Multi-Dimensional",
    description: "Our AI agents operate across multiple dimensions of data, providing comprehensive insights and solutions."
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Built for tomorrow's challenges with adaptive learning capabilities that evolve with your needs."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="gradient-text">Advanced Capabilities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the revolutionary features that make NESTX.SPACE the ultimate AI platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FeaturesSection;
