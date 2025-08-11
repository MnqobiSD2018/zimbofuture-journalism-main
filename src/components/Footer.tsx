import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Globe } from "lucide-react";
import JSNZLogo from "@/assets/JSNZ.svg";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* Logo and Branding */}
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={JSNZLogo} 
                alt="JSNZ Logo" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <h3 className="text-xl font-bold">
                Journalism Students Network of Zimbabwe
              </h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Empowering the next generation of Zimbabwean journalists through education, innovation, and networking.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Globe className="h-4 w-4" />
              <span>Legal Registration: Youth-driven NGO</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Pillars</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Free Speech</li>
              <li>• Innovation</li>
              <li>• Networking</li>
              <li>• Ethical Journalism</li>
              <li>• Media Independence</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Partner Universities</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>• University of Zimbabwe</li>
              <li>• National University of Science and Technology</li>
              <li>• Midlands State University</li>
              <li>• And 2 other institutions</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Journalism Students Network of Zimbabwe. Building a stronger media future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;