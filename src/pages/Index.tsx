
import { useState } from "react";
import { zodiacSigns } from "@/data/zodiacData";
import { ZodiacCard } from "@/components/ZodiacCard";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
  const [selectedSign, setSelectedSign] = useState<string | undefined>();

  const selectedZodiac = zodiacSigns.find((sign) => sign.name === selectedSign);

  return (
    <div className="min-h-screen bg-mystical bg-gradient-to-b from-mystical to-mystical-light">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary animate-fade-up">
            Celestial Insights
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover your zodiac sign's insights and receive personalized predictions for your career and love life.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Label htmlFor="zodiac-select" className="text-white mb-2 block">
            Select Your Zodiac Sign
          </Label>
          <Select onValueChange={setSelectedSign}>
            <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Choose your sign" />
            </SelectTrigger>
            <SelectContent>
              {zodiacSigns.map((sign) => (
                <SelectItem key={sign.name} value={sign.name}>
                  {sign.name} ({sign.dates})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {selectedZodiac && <ZodiacCard {...selectedZodiac} />}
        </div>
      </div>
    </div>
  );
};

export default Index;
