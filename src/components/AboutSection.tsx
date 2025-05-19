
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-runaEarth">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Runa was founded with a vision to transform Indonesia's mining industry through innovation, 
              sustainable practices, and a deep commitment to people and partnerships.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe that mining can be a force for positive change in Indonesia's economy, 
              creating prosperity while responsibly managing our natural resources.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              With decades of collective experience, our team blends traditional mining expertise 
              with forward-thinking approaches to create solutions that work for today and tomorrow.
            </p>
            <Link to="/about">
              <Button className="btn-primary">Learn More About Us</Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" 
                alt="Runa mining operations" 
                className="w-full h-full object-cover"
              />
              {/* Indonesian-inspired decorative element */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent rounded-tr-3xl"></div>
            </div>
            {/* Accent square */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-4 border-primary rounded-tl-3xl hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
