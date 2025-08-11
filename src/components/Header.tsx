import { Button } from "@/components/ui/button";
import JSNZLogo from "@/assets/JSNZ.svg";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={JSNZLogo} 
              alt="JSNZ Logo" 
              className="h-10 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(15%) saturate(1234%) hue-rotate(200deg) brightness(95%) contrast(89%)' }}
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">
                Journalism Students Network of Zimbabwe
              </h1>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:inline-flex"
              onClick={() => scrollToSection('footer')}
            >
              Contact Us
            </Button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('donation-tiers')}
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
