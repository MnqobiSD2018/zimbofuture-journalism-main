import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProgressCard = () => {
  const raised = 15420;
  const goal = 50000;
  const percentage = Math.round((raised / goal) * 100);
  const supporters = 187;

  return (
    <Card className="bg-gradient-card shadow-medium border-0">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              ${raised.toLocaleString()}
            </div>
            <div className="text-muted-foreground">
              raised of ${goal.toLocaleString()} goal
            </div>
          </div>
          
          <Progress value={percentage} className="h-3" />
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{supporters}</div>
              <div className="text-sm text-muted-foreground">supporters</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{percentage}%</div>
              <div className="text-sm text-muted-foreground">funded</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;