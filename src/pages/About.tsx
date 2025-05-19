
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="bg-runaEarth text-white py-20">
          <div className="container mx-auto container-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Runa</h1>
            <p className="text-xl max-w-2xl mb-8">
              Shaping the future of Indonesia's industrial economy through sustainable mining, 
              innovative engineering, and reliable equipment solutions.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-runaEarth">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2010, Runa began as a small mining consultancy in Jakarta. Our founder, 
                  having spent decades in Indonesia's mining sector, saw an opportunity to create a 
                  company that would blend traditional mining expertise with forward-thinking approaches.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The name "Runa" comes from an ancient Javanese word meaning "purpose" or "path forward" – 
                  reflecting our commitment to helping Indonesia's industrial economy find its way to a 
                  sustainable and prosperous future.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we've grown to over 500 employees across Indonesia, with operations spanning 
                  mining, engineering, and equipment solutions. Despite our growth, we remain committed to 
                  our founding principles: excellence, sustainability, innovation, and partnership.
                </p>
              </div>
              <div className="relative">
                <div className="h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581093196277-9f6c89b83c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Runa mining operations" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent rounded-tr-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-runaEarth/5">
          <div className="container mx-auto container-padding">
            <h2 className="text-3xl font-bold mb-12 text-center text-runaEarth">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We are committed to the highest standards in everything we do, from safety protocols to operational efficiency."
                },
                {
                  title: "Sustainability",
                  description: "We believe that responsible mining practices are not just good for the environment but essential for long-term business success."
                },
                {
                  title: "Innovation",
                  description: "We continuously seek new technologies and methodologies to improve our operations and outcomes for all stakeholders."
                },
                {
                  title: "Partnership",
                  description: "We believe in building lasting relationships with communities, clients, and employees based on mutual respect and benefit."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <div className="w-10 h-10 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-runaEarth">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <h2 className="text-3xl font-bold mb-12 text-center text-runaEarth">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Surya Wibowo",
                  role: "Chief Executive Officer",
                  bio: "With over 25 years in the mining industry, Surya brings extensive experience in operations and strategic leadership.",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                },
                {
                  name: "Anita Sutanto",
                  role: "Chief Operations Officer",
                  bio: "Anita oversees all mining operations with a focus on efficiency, safety, and environmental responsibility.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                },
                {
                  name: "Budi Hidayat",
                  role: "Chief Engineering Officer",
                  bio: "Leading our engineering division, Budi is responsible for implementing innovative solutions across all projects.",
                  image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                }
              ].map((leader, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <div className="h-80 overflow-hidden">
                    <img 
                      src={leader.image}
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-runaEarth">{leader.name}</h3>
                    <p className="text-primary font-medium mb-4">{leader.role}</p>
                    <p className="text-gray-700">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Join Us on Our Journey</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to partner with us, join our team, or learn more about our 
              services, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
              <Link to="/careers">
                <Button className="bg-white text-primary hover:bg-white/90">
                  View Career Opportunities
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
