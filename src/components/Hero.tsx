
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1627434231336-4b3a383a24cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            mixBlendMode: "overlay"
          }}
        />
      </div>
      
      {/* Left-side tinted overlay for better text readability */}
      <div className="absolute inset-y-0 left-0 w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-runaEarth/90 to-transparent z-0"></div>

      {/* Content */}
      <div className="container mx-auto container-padding relative z-10 mt-16">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Mining Reimagined
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-xl animate-fade-in animate-delay-100">
            Shaping the future of Indonesia's industrial economy through sustainable mining, innovative engineering, and reliable equipment solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
            <Link href="/contact">
              <Button className="btn-primary bg-primary hover:bg-primary/90 text-white text-lg">
                Get in Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Indonesian design element (subtle pattern at bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-runaEarth/40 to-transparent z-0"></div>
    </div>
  );
};

export default Hero;
