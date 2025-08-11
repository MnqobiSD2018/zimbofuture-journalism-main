import { Button } from "@/components/ui/button";
import heroImage from "@/assets/journalism-hero.jpg";
import JSNZLogo from "@/assets/JSNZ.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={JSNZLogo} 
            alt="JSNZ Logo" 
            className="h-20 w-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-hero leading-tight">
          Help the Next Generation of{" "}
          <span className="text-secondary">Zimbabwean Journalists</span>{" "}
          Thrive
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-body opacity-90">
          Supporting journalism education to build a more informed, transparent, and democratic Zimbabwe
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="donate" className="text-lg px-8 py-4">
            Donate Now
          </Button>
          <Button size="lg" variant="hero" className="text-lg px-8 py-4">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;