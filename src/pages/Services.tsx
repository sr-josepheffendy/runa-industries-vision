
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "mining",
      title: "Mining Operations",
      description: "Complete end-to-end mining solutions from exploration and planning to extraction and site management.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      features: [
        "Site Assessment & Exploration",
        "Mine Planning & Development",
        "Extraction Operations",
        "Site Management & Logistics",
        "Environmental Compliance & Rehabilitation"
      ]
    },
    {
      id: "engineering",
      title: "Engineering Services",
      description: "Expert geological, civil, and environmental engineering to optimize operations and ensure compliance.",
      image: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Geological Surveys & Analysis",
        "Civil Engineering & Infrastructure",
        "Environmental Impact Assessment",
        "Resource Modeling & Estimation",
        "Technical Due Diligence"
      ]
    },
    {
      id: "equipment",
      title: "Equipment Solutions",
      description: "Comprehensive fleet management, maintenance, and optimization for heavy equipment and specialized machinery.",
      image: "https://images.unsplash.com/photo-1627434231336-4b3a383a24cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Heavy Equipment Fleet Management",
        "Preventative Maintenance Programs",
        "Equipment Performance Optimization",
        "Operator Training & Certification",
        "Equipment Procurement Consulting"
      ]
    },
    {
      id: "geological",
      title: "Geological Services",
      description: "Comprehensive geological investigations and resource assessments for mining projects of all sizes.",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Resource Mapping & Estimation",
        "Geotechnical Assessments",
        "Drill Program Planning & Management",
        "Mineral Analysis & Testing",
        "Geological Risk Assessment"
      ]
    },
    {
      id: "consulting",
      title: "Industry Consulting",
      description: "Strategic guidance and industry expertise to optimize your mining operations and investments.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Strategic Planning & Development",
        "Operational Efficiency Assessments",
        "Regulatory Compliance Guidance",
        "Investment Due Diligence",
        "Market Analysis & Forecasting"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="bg-runaEarth text-white py-20">
          <div className="container mx-auto container-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mb-8">
              From exploration to extraction, engineering to equipment management, Runa provides
              end-to-end solutions for the mining industry in Indonesia.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-runaEarth">Comprehensive Mining Solutions</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Runa delivers integrated services across the mining value chain, ensuring operational 
                excellence, regulatory compliance, and sustainable practices at every stage.
              </p>
            </div>

            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${
                  index !== 0 ? "border-t border-gray-200" : ""
                }`}
              >
                <div className={`order-1 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <h2 className="text-3xl font-bold mb-6 text-runaEarth">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-4 h-4 mt-1 mr-3 bg-primary rounded-full"></span>
                        <span className="text-lg text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="btn-primary">Inquire About This Service</Button>
                  </Link>
                </div>
                
                <div className={`order-2 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                    {/* Indonesian-inspired decorative element */}
                    <div className={`absolute -bottom-3 ${index % 2 === 0 ? "-right-3" : "-left-3"} w-24 h-24 bg-accent rounded-tr-3xl`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-runaEarth/5">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-3xl font-bold mb-6 text-runaEarth">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Discuss your project requirements with our team of experts and discover how Runa can 
              help you achieve your mining and engineering goals.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">Get in Touch</Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
