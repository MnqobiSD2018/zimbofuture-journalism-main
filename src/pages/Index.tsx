import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgressCard from "@/components/ProgressCard";
import DonationTiers from "@/components/DonationTiers";
import CampaignStory from "@/components/CampaignStory";
import ImpactMetrics from "@/components/ImpactMetrics";
import ShareSection from "@/components/ShareSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <ProgressCard />
          </div>
        </div>
      </section>
      
      <DonationTiers />
      <CampaignStory />
      <ImpactMetrics />
      <ShareSection />
      <Footer />
    </div>
  );
};

export default Index;