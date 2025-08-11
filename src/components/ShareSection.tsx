import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Facebook, Twitter, Mail, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ShareSection = () => {
  const { toast } = useToast();
  const campaignUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(campaignUrl);
    toast({
      title: "Link copied!",
      description: "Campaign link has been copied to your clipboard",
    });
  };

  const shareText = "Help support the next generation of Zimbabwean journalists! Every contribution makes a difference in building a more informed Zimbabwe.";

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-card shadow-medium border-0 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl text-primary">
              <Share2 className="h-6 w-6 text-secondary" />
              Help Spread the Word
            </CardTitle>
            <p className="text-muted-foreground">
              Share this campaign with your network to maximize our impact
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(campaignUrl)}`, '_blank')}
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
              
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(campaignUrl)}`, '_blank')}
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Button>
              
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open(`mailto:?subject=Support Zimbabwean Journalism&body=${encodeURIComponent(shareText + ' ' + campaignUrl)}`, '_blank')}
              >
                <Mail className="h-4 w-4" />
                Email
              </Button>
              
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={handleCopyLink}
              >
                <Copy className="h-4 w-4" />
                Copy Link
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ShareSection;