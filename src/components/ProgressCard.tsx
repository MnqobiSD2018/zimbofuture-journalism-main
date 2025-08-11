import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Target, Calendar } from "lucide-react";

const ProgressCard = () => {
  const raised = 15420;
  const goal = 50000;
  const percentage = Math.round((raised / goal) * 100);
  const supporters = 187;
  const daysLeft = 23;

  return (
    <Card className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 shadow-2xl border border-primary/20 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="space-y-8">
          {/* Header with Icon */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Campaign Progress
            </h3>
            <p className="text-muted-foreground">
              Help us reach our goal and empower Zimbabwean journalists
            </p>
          </div>

          {/* Main Progress Section */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                ${raised.toLocaleString()}
              </div>
              <div className="text-lg text-muted-foreground">
                raised of <span className="font-semibold text-primary">${goal.toLocaleString()}</span> goal
              </div>
            </div>
            
            {/* Enhanced Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>0%</span>
                <span className="font-medium text-primary">{percentage}%</span>
                <span>100%</span>
              </div>
              <Progress 
                value={percentage} 
                className="h-4 bg-primary/10 border border-primary/20"
              />
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
              <Users className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{supporters}</div>
              <div className="text-sm text-muted-foreground">Supporters</div>
            </div>
            <div className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/10">
              <Target className="h-6 w-6 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-secondary">{percentage}%</div>
              <div className="text-sm text-muted-foreground">Funded</div>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
              <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{daysLeft}</div>
              <div className="text-sm text-muted-foreground">Days Left</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-4">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Campaign is active and accepting donations
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;