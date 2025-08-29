import { Button } from "@/components/ui/button";
import JSNZLogo from "@/assets/JSNZ.svg";
import React, { useEffect, useState } from "react";
import { img1, img2, img3, img4, img5, img6 } from "@/assets/heroImage";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow: change background every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white py-20">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img src={JSNZLogo} alt="JSNZ Logo" className="h-24 w-auto" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-hero leading-tight">
          Help the Next Generation of{" "}
          <span className="text-secondary">Zimbabwean Journalists</span>{" "}
          Thrive
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-body opacity-90">
          Supporting journalism education to build a more informed, 
          transparent, and democratic Zimbabwe
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="donate"
            className="text-lg px-8 py-4"
            onClick={() => scrollToSection("donation-tiers")}
          >
            Donate Now
          </Button>
          <Button
            size="lg"
            variant="hero"
            className="text-lg px-8 py-4"
            onClick={() => scrollToSection("campaign-story")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
