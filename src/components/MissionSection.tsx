
import { Globe, Target, Users } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="section-padding bg-runaEarth text-white">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Values</h2>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-lg text-gray-200 max-w-3xl">
            At Runa, our mission drives everything we do. We are committed to transforming Indonesia's mining industry 
            through sustainable practices, innovative solutions, and a deep respect for our people and partnerships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-runaEarth/80 p-8 rounded-lg border border-gray-700 hover:border-primary transition-all duration-300">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sustainability</h3>
            <p className="text-gray-300">
              We believe in responsible resource management that benefits Indonesia today and preserves 
              resources for future generations, minimizing environmental impact in everything we do.
            </p>
          </div>
          
          <div className="bg-runaEarth/80 p-8 rounded-lg border border-gray-700 hover:border-primary transition-all duration-300">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-300">
              We continuously seek better, smarter ways to extract resources, applying cutting-edge technologies 
              and methodologies that increase efficiency while reducing environmental impact.
            </p>
          </div>
          
          <div className="bg-runaEarth/80 p-8 rounded-lg border border-gray-700 hover:border-primary transition-all duration-300">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">People First</h3>
            <p className="text-gray-300">
              Our greatest asset is our people. We invest in the safety, growth, and well-being of our team 
              and the communities where we operate, fostering a culture of respect and mutual success.
            </p>
          </div>
        </div>
        
        {/* Vision Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary/20 to-transparent p-8 rounded-lg border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg text-gray-200">
            To become Indonesia's most trusted and innovative mining company, setting new standards for 
            operational excellence, environmental stewardship, and community partnership.
          </p>
        </div>
      </div>
      
      {/* Indonesian design element */}
      <div className="absolute left-0 right-0 h-8 bg-pattern-batik opacity-10"></div>
    </section>
  );
};

export default MissionSection;
