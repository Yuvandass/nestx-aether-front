
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Scanning line effect */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-60 animate-pulse"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-orbitron font-black">
              <span className="gradient-text text-glow">NESTX</span>
              <span className="text-white">.SPACE</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full glow"></div>
          </div>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-inter font-light text-gray-300">
            Next-Generation AI Agents
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing the future with intelligent AI agents that adapt, learn, and evolve. 
            Experience the next frontier of artificial intelligence with NESTX.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-black font-semibold px-8 py-4 text-lg rounded-xl glow transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-primary/70">
            <span className="text-sm font-inter mb-2">Scroll to explore</span>
            <ArrowDown size={24} className="animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
