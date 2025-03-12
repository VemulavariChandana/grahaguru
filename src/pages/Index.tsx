import { useState, useEffect } from "react";
import { zodiacSigns } from "@/data/zodiacData";
import { ZodiacCard } from "@/components/ZodiacCard";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoonStar, Sun, Sparkles } from "lucide-react";
import { fetchHoroscope } from "@/services/astrologyService";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
  const [selectedSign, setSelectedSign] = useState<string | undefined>();
  const [horoscopeData, setHoroscopeData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState<"day" | "night">("day");

  const selectedZodiac = zodiacSigns.find((sign) => sign.name === selectedSign);

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 18) {
      setTimeOfDay("day");
    } else {
      setTimeOfDay("night");
    }
  }, []);

  const handleSelectSign = async (sign: string) => {
    setSelectedSign(sign);
    if (sign) {
      setIsLoading(true);
      try {
        const data = await fetchHoroscope(sign.toLowerCase());
        setHoroscopeData(data);
      } catch (error) {
        console.error("Error fetching horoscope:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const toggleTimeOfDay = () => {
    setTimeOfDay(timeOfDay === "day" ? "night" : "day");
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-1000 ${
        timeOfDay === "day" 
          ? "bg-gradient-to-b from-blue-500 to-purple-600" 
          : "bg-gradient-to-b from-mystical to-mystical-light"
      }`}
    >
      <div className="absolute top-4 right-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTimeOfDay}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full"
        >
          {timeOfDay === "day" ? <MoonStar className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-accent animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-up">
              GrahaGuru
            </h1>
            <Sparkles className="h-8 w-8 text-accent animate-pulse" />
          </div>
          <p 
            className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-up" 
            style={{ animationDelay: "0.2s" }}
          >
            Discover your cosmic journey with ancient astrological wisdom and personalized celestial insights.
          </p>
        </div>

        <div 
          className="max-w-md mx-auto mb-12 animate-fade-up bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20" 
          style={{ animationDelay: "0.3s" }}
        >
          <Label htmlFor="zodiac-select" className="text-white mb-2 block text-lg">
            Select Your Zodiac Sign
          </Label>
          <Select onValueChange={handleSelectSign}>
            <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Choose your sign" />
            </SelectTrigger>
            <SelectContent className="bg-mystical border-white/20">
              {zodiacSigns.map((sign) => (
                <SelectItem 
                  key={sign.name} 
                  value={sign.name}
                  className="text-white hover:bg-white/10"
                >
                  {sign.symbol} {sign.name} ({sign.dates})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {selectedZodiac && (
            <ZodiacCard 
              {...selectedZodiac} 
              isLoading={isLoading} 
              horoscopeData={horoscopeData}
            />
          )}
        </div>

        {!selectedSign && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            {zodiacSigns.map((sign) => (
              <div 
                key={sign.name}
                onClick={() => handleSelectSign(sign.name)}
                className="bg-white/10 p-4 rounded-lg text-center cursor-pointer hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-sm border border-white/20"
              >
                <div className="text-2xl mb-2">{sign.symbol}</div>
                <h3 className="font-medium text-white">{sign.name}</h3>
                <p className="text-xs text-white/70">{sign.dates}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
