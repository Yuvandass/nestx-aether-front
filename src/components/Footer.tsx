
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
              <span className="gradient-text">Ready to Transform?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join the revolution and experience the future of AI today.
            </p>
          </div>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-black font-semibold px-12 py-6 text-xl rounded-xl glow transition-all duration-300 hover:scale-105"
          >
            Get Started Now
          </Button>
          
          <div className="pt-12 border-t border-primary/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-2xl font-orbitron font-bold">
                <span className="gradient-text">NESTX</span>
                <span className="text-white">.SPACE</span>
              </div>
              
              <p className="text-gray-500">
                © 2024 NESTX.SPACE. Pioneering the future of AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
