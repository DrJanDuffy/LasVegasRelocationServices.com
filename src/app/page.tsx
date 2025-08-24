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
      <div id="home-services">
        <Services />
      </div>
      <div id="home-about">
        <About />
      </div>
      <div id="home-team">
        <Team />
      </div>
      <div id="home-testimonials">
        <Testimonials />
      </div>
      <div id="home-contact">
        <Contact />
      </div>
      <CTA />
    </main>
  );
}
