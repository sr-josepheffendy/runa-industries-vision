
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Runa. We'll respond to your inquiry soon."
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: "+62 21 1234 5678"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "info@runa.co.id"
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Headquarters",
      details: "Jl. Sudirman No. 123, Jakarta, Indonesia"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office Hours",
      details: "Monday - Friday: 8:00 AM - 5:00 PM"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="bg-runaEarth text-white py-20">
          <div className="container mx-auto container-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mb-8">
              Get in touch with our team to discuss your mining, engineering, or 
              equipment needs. We're here to help you succeed.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-runaEarth">Get in Touch</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 mt-1 bg-primary/10 p-3 rounded-full text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-runaEarth mb-1">{item.title}</h3>
                        <p className="text-gray-700">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map or Image */}
                <div className="rounded-lg overflow-hidden h-[300px] shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2144&q=80" 
                    alt="Jakarta skyline" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
                <h2 className="text-2xl font-bold mb-6 text-runaEarth">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        value={formData.email}
                        onChange={handleChange} 
                        placeholder="your.email@company.com" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange} 
                        placeholder="Your company name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange} 
                        placeholder="+62 xxx xxx xxxx" 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6 space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange} 
                      placeholder="How can we help you?" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-8 space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" 
                      placeholder="Please provide details about your inquiry..." 
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-white hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Offices Section */}
        <section className="py-16 bg-runaEarth/5">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-runaEarth">Our Offices</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                With locations throughout Indonesia, our teams are strategically positioned 
                to serve clients across the archipelago.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  city: "Jakarta",
                  address: "Jl. Sudirman No. 123, Jakarta",
                  phone: "+62 21 1234 5678",
                  email: "jakarta@runa.co.id"
                },
                {
                  city: "Balikpapan",
                  address: "Jl. MT Haryono No. 45, Balikpapan",
                  phone: "+62 542 789 012",
                  email: "balikpapan@runa.co.id"
                },
                {
                  city: "Makassar",
                  address: "Jl. Perintis Kemerdekaan No. 78, Makassar",
                  phone: "+62 411 345 678",
                  email: "makassar@runa.co.id"
                }
              ].map((office, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-runaEarth">{office.city}</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>{office.address}</p>
                    <p>Phone: {office.phone}</p>
                    <p>Email: {office.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
