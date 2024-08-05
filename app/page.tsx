import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/project-section";

import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdurrahman Mohammad",
  description: "Software Engineer & Full-Stack Developer",
};
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <Footer />
    </main>
  );
}
