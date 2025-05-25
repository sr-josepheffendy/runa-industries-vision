
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhyRuna() {
  const advantages = [
    {
      title: "Local Expertise & Global Standards",
      description: "As a proudly Indonesian company, we combine deep local knowledge with international best practices.",
      icon: "🌏"
    },
    {
      title: "Integrated Solutions",
      description: "From exploration to extraction, engineering to equipment, we provide end-to-end mining solutions.",
      icon: "🔄"
    },
    {
      title: "Sustainable Practices",
      description: "Our operations prioritize environmental responsibility and community well-being.",
      icon: "🌱"
    },
    {
      title: "Innovative Approaches",
      description: "We embrace new technologies and methodologies to improve efficiency and outcomes.",
      icon: "💡"
    },
    {
      title: "People-First Philosophy",
      description: "We invest in our team's growth and prioritize safety across all operations.",
      icon: "👥"
    },
    {
      title: "Long-Term Partnerships",
      description: "We build lasting relationships with clients, communities, and stakeholders.",
      icon: "🤝"
    }
  ];
  
  const testimonials = [
    {
      quote: "Runa's technical expertise and commitment to sustainable practices have made them an invaluable partner in our mining operations.",
      author: "Ahmad Wijaya",
      position: "Operations Director, PT Mining Indonesia",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      quote: "Their engineering team provided innovative solutions that significantly improved our operational efficiency while reducing environmental impact.",
      author: "Sarah Johnson",
      position: "Chief Technical Officer, Global Resources Ltd",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
    },
    {
      quote: "The equipment management solutions provided by Runa have extended the life of our fleet and reduced our maintenance costs substantially.",
      author: "David Chen",
      position: "Fleet Manager, East Asia Mining Corporation",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="bg-runaEarth text-white py-20">
          <div className="container mx-auto container-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Runa?</h1>
            <p className="text-xl max-w-3xl mb-8">
              We combine deep Indonesian mining expertise with forward-thinking approaches 
              to deliver exceptional results for our clients and communities.
            </p>
          </div>
        </section>

        {/* Our Advantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-runaEarth">The Runa Advantage</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                What sets us apart is our unique combination of local expertise, technical excellence, 
                and commitment to sustainable practices that benefit all stakeholders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-runaEarth">{advantage.title}</h3>
                  <p className="text-gray-700">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="py-16 bg-runaEarth/5">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-runaEarth">Our Track Record</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Over the years, we've built a strong reputation for excellence across Indonesia's mining sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "25+", label: "Sites Across Indonesia" },
                { number: "500+", label: "Professional Staff" },
                { number: "15", label: "Years of Excellence" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-runaEarth">What Our Clients Say</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Don't just take our word for it—hear from the partners and clients who've experienced the Runa difference.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-runaEarth">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 bg-runaEarth/5">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-runaEarth">Our Clients & Partners</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We've worked with leading companies across the mining and industrial sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Client Logo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Work With the Best?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss how Runa can help you achieve your mining 
              and engineering objectives with excellence and sustainability.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
