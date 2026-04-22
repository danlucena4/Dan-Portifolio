import { Navbar } from "@/components/Navbar";
import { TweakPanel } from "@/components/TweakPanel";
import { CTASection } from "@/components/sections/CTA";
import { FooterSection } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/Hero";
import { NewsletterSection } from "@/components/sections/Newsletter";
import { ProcessSection } from "@/components/sections/Process";
import { ServicesSection } from "@/components/sections/Services";
import { StatsSection } from "@/components/sections/Stats";
import { TechSection } from "@/components/sections/Tech";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <HeroSection />
      <TechSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <CTASection />
      <NewsletterSection />
      <FooterSection />
      <TweakPanel />
    </main>
  );
}
