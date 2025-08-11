import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const DonationTiers = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustomAmount(false);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setIsCustomAmount(true);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const amount = isCustomAmount ? parseFloat(customAmount) : selectedAmount;
    if (amount && amount > 0) {
      // Here you would typically integrate with a payment processor
      console.log(`Processing donation of $${amount}`);
      alert(`Thank you for your donation of $${amount}! This would integrate with a payment processor.`);
    } else {
      alert("Please select an amount or enter a valid custom amount.");
    }
  };

  const getCurrentAmount = () => {
    if (isCustomAmount && customAmount) {
      return parseFloat(customAmount);
    }
    return selectedAmount;
  };

  const isAmountValid = () => {
    const amount = getCurrentAmount();
    return amount && amount > 0;
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Make a Donation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our preset amounts or enter a custom amount to support journalism in Zimbabwe
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Preset Amounts */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4 text-center">
              Choose a Preset Amount
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {presetAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount && !isCustomAmount ? "default" : "outline"}
                  className={`h-16 text-lg font-semibold ${
                    selectedAmount === amount && !isCustomAmount
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10"
                  }`}
                  onClick={() => handleAmountSelect(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4 text-center">
              Or Enter a Custom Amount
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  min="1"
                  step="0.01"
                  className="text-center text-lg h-12"
                />
              </div>
              <div className="text-muted-foreground text-sm">
                USD
              </div>
            </div>
          </div>

          {/* Donation Summary */}
          {isAmountValid() && (
            <Card className="mb-8 bg-gradient-card border-0">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Donation Summary
                </h4>
                <p className="text-2xl font-bold text-secondary">
                  ${getCurrentAmount()?.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Your contribution will help support journalism education and training in Zimbabwe
                </p>
              </CardContent>
            </Card>
          )}

          {/* Donate Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="px-12 py-6 text-lg font-semibold"
              disabled={!isAmountValid()}
              onClick={handleDonate}
            >
              {isAmountValid() ? `Donate $${getCurrentAmount()?.toFixed(2)}` : "Select an Amount"}
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              All donations are secure and will be used to support journalism education initiatives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationTiers;