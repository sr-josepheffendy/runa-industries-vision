
import Header from "@/components/Header";
import NextHero from "@/components/NextHero";
import NextAboutSection from "@/components/NextAboutSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <NextHero />
      <NextAboutSection />
      <MissionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
