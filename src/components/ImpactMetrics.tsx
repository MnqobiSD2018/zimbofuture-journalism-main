import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Globe, Award } from "lucide-react";

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: GraduationCap,
      value: "5",
      label: "Universities",
      description: "Partnered institutions"
    },
    {
      icon: BookOpen,
      value: "15+",
      label: "Workshops",
      description: "Training sessions planned"
    },
    {
      icon: Globe,
      value: "200+",
      label: "Students",
      description: "To be empowered"
    },
    {
      icon: Award,
      value: "3",
      label: "Core Pillars",
      description: "Free Speech, Innovation, Networking"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Impact by the Numbers
          </h2>
          <p className="text-lg text-muted-foreground">
            Building the future of journalism across Zimbabwe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 text-center border-0">
              <CardContent className="p-6">
                <metric.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;