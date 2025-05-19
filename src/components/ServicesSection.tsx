
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Mining Operations",
      description: "Complete end-to-end mining solutions from exploration and planning to extraction and site management.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      link: "/services#mining"
    },
    {
      title: "Engineering Services",
      description: "Expert geological, civil, and environmental engineering to optimize operations and ensure compliance.",
      image: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services#engineering"
    },
    {
      title: "Equipment Solutions",
      description: "Comprehensive fleet management, maintenance, and optimization for heavy equipment and specialized machinery.",
      image: "https://images.unsplash.com/photo-1627434231336-4b3a383a24cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services#equipment"
    }
  ];

  return (
    <section className="section-padding bg-runaEarth/5" id="services">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-runaEarth">Our Services</h2>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Runa provides comprehensive mining and engineering services with a focus on sustainability, innovation, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-runaEarth">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={service.link}>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services">
            <Button className="btn-primary">View All Our Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
