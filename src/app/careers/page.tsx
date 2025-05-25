
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Careers() {
  const openPositions = [
    {
      title: "Mining Engineer",
      location: "Jakarta",
      type: "Full-time",
      description: "Design, plan, and oversee mining operations to ensure safe and efficient extraction of minerals."
    },
    {
      title: "Environmental Specialist",
      location: "East Kalimantan",
      type: "Full-time",
      description: "Develop and implement environmental management plans for mining operations in compliance with regulations."
    },
    {
      title: "Heavy Equipment Technician",
      location: "South Sumatra",
      type: "Full-time",
      description: "Maintain and repair heavy equipment and machinery used in mining operations."
    },
    {
      title: "Geologist",
      location: "Central Java",
      type: "Full-time",
      description: "Conduct geological surveys, analyze data, and provide recommendations for resource development."
    },
    {
      title: "Project Manager",
      location: "Jakarta",
      type: "Full-time",
      description: "Lead and coordinate mining projects from planning to completion, ensuring objectives are met."
    },
    {
      title: "Safety Officer",
      location: "East Kalimantan",
      type: "Full-time",
      description: "Implement and monitor safety protocols and procedures across mining operations."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="bg-runaEarth text-white py-20">
          <div className="container mx-auto container-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl max-w-3xl mb-8">
              Build a rewarding career at Runa, where innovation, sustainability, 
              and excellence shape the future of mining in Indonesia.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-runaEarth">Why Work With Us</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Runa, we believe our people are our greatest asset. We're committed to creating 
                  an environment where talented individuals can grow, contribute, and thrive.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Our team members enjoy competitive benefits, continuous learning opportunities, 
                  and the chance to work on meaningful projects that shape Indonesia's future.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {[
                    "Competitive compensation",
                    "Health and wellness benefits",
                    "Career development",
                    "Training programs",
                    "Inclusive workplace",
                    "Work-life balance"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                    alt="Runa team members" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent rounded-tr-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="py-16 bg-runaEarth/5">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-runaEarth">Our Culture</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We foster a collaborative, innovative, and inclusive culture where every team member 
                can contribute to our mission of reshaping Indonesia's mining industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "We encourage fresh thinking and new approaches to solve complex challenges in the mining industry."
                },
                {
                  title: "Collaboration",
                  description: "We believe that the best results come from diverse teams working together toward common goals."
                },
                {
                  title: "Integrity",
                  description: "We operate with honesty, transparency, and a strong commitment to ethical business practices."
                },
                {
                  title: "Excellence",
                  description: "We strive for the highest standards in everything we do, from technical work to client service."
                },
                {
                  title: "Sustainability",
                  description: "We're committed to mining practices that protect the environment and benefit local communities."
                },
                {
                  title: "Growth",
                  description: "We invest in our team's professional development and create paths for career advancement."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-runaEarth">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-runaEarth">Open Positions</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore current opportunities to join the Runa team and contribute to 
                Indonesia's mining and engineering excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-runaEarth">{position.title}</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mr-2">
                      {position.location}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {position.type}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6">{position.description}</p>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Don't see a position that matches your skills? We're always looking for talented individuals.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Submit General Application
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Your Career With Us?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our team of mining and engineering professionals shaping the future of 
              Indonesia's resource industry.
            </p>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              View All Open Positions
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
