import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Industries() {
  const industries = [
    {
      name: "Coal Mining",
      description: "Indonesia is one of the world's largest exporters of coal. Our expertise in coal mining includes open-pit operations, underground mining, and coal preparation, with a focus on efficient extraction and environmental management.",
      image: "https://images.unsplash.com/photo-1553801091-5dc59067c7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Nickel Mining",
      description: "As a key component in batteries and stainless steel production, nickel is a strategic resource for Indonesia's future. Runa provides comprehensive solutions for nickel exploration, extraction, and processing.",
      image: "https://images.unsplash.com/photo-1602618165333-50742b2f807d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Bauxite Mining",
      description: "Indonesia's rich bauxite deposits are key to aluminum production worldwide. Our bauxite mining solutions encompass exploration, extraction, and environmental management tailored to the unique challenges of bauxite operations.",
      image: "https://images.unsplash.com/photo-1605889775667-1d066f1ac2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Silica Sand Mining",
      description: "Silica sand is essential for glass production, foundry work, and industrial applications. Runa offers specialized expertise in silica sand mining, processing, and quality control.",
      image: "https://images.unsplash.com/photo-1618221118493-9cfa1a38c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="bg-runaEarth text-white py-20">
          <div className="container mx-auto container-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl max-w-3xl mb-8">
              Runa provides specialized expertise across a diverse range of mining operations, 
              helping to unlock Indonesia's rich natural resources responsibly and efficiently.
            </p>
          </div>
        </section>

        {/* Industries Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-runaEarth">Mining Sector Expertise</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                With deep experience across Indonesia's mineral wealth, Runa delivers 
                tailored solutions for each industry's unique challenges and requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-16">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index !== 0 ? "pt-16 border-t border-gray-200" : ""
                  }`}
                >
                  <div className={`${index % 2 !== 0 ? "order-2" : "order-1"}`}>
                    <h3 className="text-2xl font-bold mb-6 text-runaEarth">{industry.name}</h3>
                    <p className="text-lg text-gray-700 mb-8">
                      {industry.description}
                    </p>
                    <Link href="/services">
                      <Button className="bg-primary text-white hover:bg-primary/90">
                        View Related Services
                      </Button>
                    </Link>
                  </div>
                  
                  <div className={`relative ${index % 2 !== 0 ? "order-1" : "order-2"}`}>
                    <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src={industry.image} 
                        alt={industry.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Indonesian-inspired decorative element */}
                    <div className={`absolute -bottom-3 ${index % 2 === 0 ? "-right-3" : "-left-3"} w-24 h-24 bg-accent rounded-tr-3xl`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Minerals Section */}
        <section className="py-16 bg-runaEarth/5">
          <div className="container mx-auto container-padding">
            <h2 className="text-3xl font-bold mb-6 text-center text-runaEarth">Other Minerals & Resources</h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Beyond our core industries, Runa also provides expertise in the exploration and 
              extraction of other valuable minerals found throughout Indonesia.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  mineral: "Copper",
                  uses: "Electronics, construction, industrial machinery"
                },
                {
                  mineral: "Gold",
                  uses: "Jewelry, electronics, financial reserves"
                },
                {
                  mineral: "Tin",
                  uses: "Electronics, packaging, chemicals"
                },
                {
                  mineral: "Iron Ore",
                  uses: "Steel production, construction, manufacturing"
                },
                {
                  mineral: "Manganese",
                  uses: "Steel production, batteries, chemicals"
                },
                {
                  mineral: "Rare Earth Elements",
                  uses: "Electronics, renewable energy, defense technologies"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-runaEarth">{item.mineral}</h3>
                  <p className="text-gray-700 mb-3">
                    <span className="font-medium">Primary Uses:</span> {item.uses}
                  </p>
                  <div className="h-1 w-16 bg-primary mt-4"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Specialized Mining Solutions for Your Industry</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our expertise can be applied to your specific 
              mineral extraction and processing requirements.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
