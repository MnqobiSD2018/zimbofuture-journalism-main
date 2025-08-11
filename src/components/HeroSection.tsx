import { Button } from "@/components/ui/button";
import JSNZLogo from "@/assets/JSNZ.svg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[95vh] bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/527454456_1545929689878265_2320324283767260995_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aji-GXqUu7QQ7kNvwG_ZtCN&_nc_oc=Adl4PGZteyAoPYJ2GyxkXCaPBc3nrELYEyU6WYPJ8ydZtzuAOjr3r4-4iFM4jcd1eB4&_nc_zt=23&_nc_ht=scontent.fhre2-2.fna&_nc_gid=InHpKkwPpxJ0lI0knNVkWw&oh=00_AfXNJGTAI98yMeZaTBLE8GoTwJr23PE049FvLwDQyLuceQ&oe=689F53C4')` }}
      ></div>
      
      <div className="relative z-20 container mx-auto px-4 text-center text-white py-20">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img 
            src={JSNZLogo} 
            alt="JSNZ Logo" 
            className="h-24 w-auto"
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
          <Button 
            size="lg" 
            variant="donate" 
            className="text-lg px-8 py-4"
            onClick={() => scrollToSection('donation-tiers')}
          >
            Donate Now
          </Button>
          <Button 
            size="lg" 
            variant="hero" 
            className="text-lg px-8 py-4"
            onClick={() => scrollToSection('campaign-story')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;