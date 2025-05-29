
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">
            DevOps
            <span className="text-gray-600"> Expert</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
            Streamlining development and operations with cutting-edge automation,
            cloud infrastructure, and continuous integration practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3 font-bold">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 font-bold">
              Download Resume
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
