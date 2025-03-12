
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRandomPrediction } from "@/data/zodiacData";
import { Sparkles } from "lucide-react";

interface ZodiacCardProps {
  name: string;
  dates: string;
  element: string;
  traits: string[];
  symbol: string;
}

export const ZodiacCard = ({
  name,
  dates,
  element,
  traits,
  symbol,
}: ZodiacCardProps) => {
  const [careerPrediction, setCareerPrediction] = useState("");
  const [lovePrediction, setLovePrediction] = useState("");

  const generatePrediction = (type: "career" | "love") => {
    const prediction = getRandomPrediction(type);
    if (type === "career") {
      setCareerPrediction(prediction);
    } else {
      setLovePrediction(prediction);
    }
  };

  return (
    <Card className="w-full max-w-md p-6 backdrop-blur-sm bg-white/10 border-white/20 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl animate-fade-up">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-primary">{name}</h3>
            <p className="text-sm text-white/60">{dates}</p>
          </div>
          <span className="text-accent text-xl">{symbol}</span>
        </div>

        <div className="space-y-2">
          <p className="text-white/80">
            <span className="font-semibold">Element:</span> {element}
          </p>
          <div className="flex flex-wrap gap-2">
            {traits.map((trait) => (
              <span
                key={trait}
                className="px-2 py-1 text-xs rounded-full bg-secondary/30 text-white/90"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <Button
              onClick={() => generatePrediction("career")}
              className="w-full mb-2 bg-primary hover:bg-primary/80 text-white"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Career Prediction
            </Button>
            {careerPrediction && (
              <p className="text-sm text-white/80 p-3 bg-mystical-light rounded-lg animate-fade-in">
                {careerPrediction}
              </p>
            )}
          </div>

          <div>
            <Button
              onClick={() => generatePrediction("love")}
              className="w-full mb-2 bg-secondary hover:bg-secondary/80 text-white"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Love Prediction
            </Button>
            {lovePrediction && (
              <p className="text-sm text-white/80 p-3 bg-mystical-light rounded-lg animate-fade-in">
                {lovePrediction}
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
