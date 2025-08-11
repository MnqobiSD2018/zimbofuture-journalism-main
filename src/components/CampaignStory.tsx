import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Users, Target, Heart } from "lucide-react";

const CampaignStory = () => {
  const sections = [
    {
      icon: AlertTriangle,
      title: "The Problem",
      content: "In an era of misinformation, the need for skilled, ethical journalists is more critical than ever. A well-informed Zimbabwe depends on its young journalists, but in a challenging economic environment, journalism educators often lack the resources to keep up with the fast-changing demands of the modern media landscape. Students need access to the latest tools, practical training, and opportunities to connect with the broader professional world to complement their academic studies."
    },
    {
      icon: Users,
      title: "Who We Are: JSNZ",
      content: "Journalism Students Network of Zimbabwe (JSNZ) is a legally registered, youth-driven organization dedicated to complementing the efforts of journalism educators. We are a passionate community of students from five major universities and colleges across Zimbabwe, including the University of Zimbabwe, the National University of Science and Technology, and Midlands State University. Our mission is to bridge the gap between classroom theory and industry practice, guided by three core pillars: Free Speech, Innovation, and Networking."
    },
    {
      icon: Target,
      title: "Our Solution",
      content: "Your support is an investment in the future of Zimbabwean journalism. We host capacity strengthening workshops led by experienced journalists, provide access to essential software and recording equipment, support student-led projects like podcasts and campus radio stations, and facilitate exchange programs with other journalism schools across Africa. These initiatives provide hands-on training in data journalism, investigative reporting, fact-checking, and specialized fields like climate change reporting and AI in journalism."
    },
    {
      icon: Heart,
      title: "The Impact",
      content: "Your contribution helps us build a more informed, transparent, and democratic society. By supporting JSNZ, you are empowering a new generation of journalists prepared to fight misinformation, hold power accountable, and uphold the principles of a free and independent press. Together, we can help journalism thrive in Zimbabwe and create lasting positive change."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Campaign Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about our mission to transform journalism education in Zimbabwe
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-primary">
                  <section.icon className="h-6 w-6 text-secondary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignStory;