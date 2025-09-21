"use client";

import { CustomCursor } from "@/components/custom-cursor";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ReviewsSection } from "@/components/reviews-section";
import { Footer } from "@/components/footer";
import "./globals.css";

export default function HomePage() {
  return (
    <div className="custom-cursor">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
