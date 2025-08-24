import type { Metadata } from "next";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import TrustIndicators from "@/components/TrustIndicators";

export const metadata: Metadata = {
  title: "Professional Relocation Services | Las Vegas Moving Experts | Dr. Jan Duffy",
  description:
    "Expert relocation services in Las Vegas. Stress-free moving with personalized support, home finding, and settling-in services. Trusted by 500+ families.",
  keywords: "Las Vegas relocation services, professional moving, home finding, corporate relocation, luxury moving, Dr. Jan Duffy",
  openGraph: {
    title: "Professional Relocation Services | Las Vegas Moving Experts",
    description: "Expert relocation services in Las Vegas. Stress-free moving with personalized support, home finding, and settling-in services.",
    type: "website",
    locale: "en_US",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustIndicators />
      <div id="home-services">
        <Services />
      </div>
      <div id="home-process">
        <Process />
      </div>
      <div id="home-about">
        <About />
      </div>
      <div id="home-testimonials">
        <Testimonials />
      </div>
      <div id="home-team">
        <Team />
      </div>
      <div id="home-contact">
        <Contact />
      </div>
      <CTA />
    </main>
  );
}
