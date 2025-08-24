import type { Metadata } from "next";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Las Vegas Relocation Services | Dr. Jan Duffy | Berkshire Hathaway",
  description:
    "Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team. Expert assistance for your move to Las Vegas.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <CTA />
    </main>
  );
}
