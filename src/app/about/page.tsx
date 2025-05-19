
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-grow mt-16">
        <section className="bg-runaEarth text-white py-20">
          <div className="container mx-auto container-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mb-8">
              Learn more about Runa, a proud Indonesian company specializing in mining solutions.
            </p>
          </div>
        </section>
        {/* Additional about page content goes here */}
      </main>
      <Footer />
    </div>
  );
}
