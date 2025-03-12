
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRandomPrediction } from "@/data/zodiacData";
import { Sparkles, Star, Moon, Sun, Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ZodiacCardProps {
  name: string;
  dates: string;
  element: string;
  traits: string[];
  symbol: string;
  isLoading?: boolean;
  horoscopeData?: any;
}

export const ZodiacCard = ({
  name,
  dates,
  element,
  traits,
  symbol,
  isLoading,
  horoscopeData,
}: ZodiacCardProps) => {
  const [careerPrediction, setCareerPrediction] = useState("");
  const [lovePrediction, setLovePrediction] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const generatePrediction = (type: "career" | "love") => {
    const prediction = getRandomPrediction(type);
    if (type === "career") {
      setCareerPrediction(prediction);
    } else {
      setLovePrediction(prediction);
    }
  };

  const getCompatibility = () => {
    const compatibilityMap: Record<string, string[]> = {
      "Aries": ["Leo", "Sagittarius", "Gemini"],
      "Taurus": ["Virgo", "Capricorn", "Cancer"],
      "Gemini": ["Libra", "Aquarius", "Aries"],
      "Cancer": ["Scorpio", "Pisces", "Taurus"],
      "Leo": ["Aries", "Sagittarius", "Gemini"],
      "Virgo": ["Taurus", "Capricorn", "Cancer"],
      "Libra": ["Gemini", "Aquarius", "Leo"],
      "Scorpio": ["Cancer", "Pisces", "Virgo"],
      "Sagittarius": ["Aries", "Leo", "Libra"],
      "Capricorn": ["Taurus", "Virgo", "Scorpio"],
      "Aquarius": ["Gemini", "Libra", "Sagittarius"],
      "Pisces": ["Cancer", "Scorpio", "Capricorn"]
    };
    
    return compatibilityMap[name] || [];
  };

  const getElementColor = () => {
    const elementColors: Record<string, string> = {
      "Fire": "from-red-500 to-orange-600",
      "Earth": "from-green-500 to-emerald-600",
      "Air": "from-blue-400 to-indigo-500",
      "Water": "from-cyan-400 to-blue-600"
    };
    
    return elementColors[element] || "from-purple-500 to-pink-600";
  };

  const getElementIcon = () => {
    const icons: Record<string, JSX.Element> = {
      "Fire": <Sun className="h-5 w-5 text-orange-400" />,
      "Earth": <Star className="h-5 w-5 text-green-400" />,
      "Air": <Sparkles className="h-5 w-5 text-blue-400" />,
      "Water": <Moon className="h-5 w-5 text-cyan-400" />
    };
    
    return icons[element] || <Star className="h-5 w-5" />;
  };

  return (
    <div className="relative w-full max-w-md perspective">
      <div className={`relative transition-all duration-700 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}>
        <Card 
          className={`w-full p-6 backdrop-blur-sm bg-gradient-to-br ${getElementColor()} bg-opacity-90 border-white/20 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl animate-fade-up backface-hidden`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white">{name}</h3>
                <p className="text-sm text-white/80">{dates}</p>
              </div>
              <span className="text-accent text-2xl bg-white/20 w-10 h-10 flex items-center justify-center rounded-full">{symbol}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white/90">Element:</span> 
                <div className="flex items-center gap-1">
                  {getElementIcon()}
                  <span className="text-white">{element}</span>
                </div>
              </div>
              
              <div>
                <span className="font-semibold text-white/90">Traits:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 text-xs rounded-full bg-white/20 text-white"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Tabs defaultValue="horoscope" className="mt-6">
              <TabsList className="bg-white/20 text-white">
                <TabsTrigger value="horoscope" className="data-[state=active]:bg-white/30">
                  Daily Horoscope
                </TabsTrigger>
                <TabsTrigger value="predictions" className="data-[state=active]:bg-white/30">
                  Predictions
                </TabsTrigger>
                <TabsTrigger value="compatibility" className="data-[state=active]:bg-white/30">
                  Compatibility
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="horoscope" className="mt-4">
                {isLoading ? (
                  <div className="flex items-center justify-center p-8">
                    <Loader2 className="h-8 w-8 animate-spin text-white" />
                  </div>
                ) : horoscopeData ? (
                  <div className="bg-white/10 p-4 rounded-lg text-white">
                    <p>{horoscopeData.description || "Your daily horoscope will appear here."}</p>
                    <p className="mt-2 text-sm text-white/70">
                      <span className="font-medium">Lucky Number:</span> {horoscopeData.lucky_number || "7"}
                    </p>
                    <p className="text-sm text-white/70">
                      <span className="font-medium">Lucky Time:</span> {horoscopeData.lucky_time || "3:30 PM"}
                    </p>
                    <p className="text-sm text-white/70">
                      <span className="font-medium">Mood:</span> {horoscopeData.mood || "Reflective"}
                    </p>
                  </div>
                ) : (
                  <p className="text-white/80 p-4 bg-white/10 rounded-lg">
                    Your daily horoscope will appear here after selecting a sign.
                  </p>
                )}
              </TabsContent>
              
              <TabsContent value="predictions" className="space-y-4 mt-4">
                <div>
                  <Button
                    onClick={() => generatePrediction("career")}
                    className="w-full mb-2 bg-white/20 hover:bg-white/30 text-white"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Career Prediction
                  </Button>
                  {careerPrediction && (
                    <p className="text-sm text-white p-3 bg-white/10 rounded-lg animate-fade-in">
                      {careerPrediction}
                    </p>
                  )}
                </div>

                <div>
                  <Button
                    onClick={() => generatePrediction("love")}
                    className="w-full mb-2 bg-white/20 hover:bg-white/30 text-white"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Love Prediction
                  </Button>
                  {lovePrediction && (
                    <p className="text-sm text-white p-3 bg-white/10 rounded-lg animate-fade-in">
                      {lovePrediction}
                    </p>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="compatibility" className="mt-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Most Compatible With:</h4>
                  <div className="flex flex-wrap gap-2">
                    {getCompatibility().map(sign => (
                      <span key={sign} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <Button 
              variant="ghost" 
              className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              See Cosmic Details
            </Button>
          </div>
        </Card>
        
        <Card 
          className="w-full p-6 backdrop-blur-sm bg-gradient-to-br from-mystical to-mystical-light border-white/20 rounded-xl shadow-xl absolute top-0 backface-hidden rotate-y-180"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white text-center">Cosmic Details</h3>
            
            <div className="space-y-3">
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white/90 font-medium">Ruling Planet</h4>
                <p className="text-white">{getRulingPlanet(name)}</p>
              </div>
              
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white/90 font-medium">Lucky Colors</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {getLuckyColors(name).map(color => (
                    <div 
                      key={color.name} 
                      className="flex items-center gap-1"
                    >
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{backgroundColor: color.hex}}
                      ></div>
                      <span className="text-white text-sm">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white/90 font-medium">Lucky Gemstone</h4>
                <p className="text-white">{getLuckyGemstone(name)}</p>
              </div>
              
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white/90 font-medium">Lucky Numbers</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {getLuckyNumbers(name).map(num => (
                    <span 
                      key={num} 
                      className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full text-white text-sm"
                    >
                      {num}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              Back to Horoscope
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Helper functions for cosmic details
const getRulingPlanet = (sign: string): string => {
  const planets: Record<string, string> = {
    "Aries": "Mars",
    "Taurus": "Venus",
    "Gemini": "Mercury",
    "Cancer": "Moon",
    "Leo": "Sun",
    "Virgo": "Mercury",
    "Libra": "Venus",
    "Scorpio": "Pluto",
    "Sagittarius": "Jupiter",
    "Capricorn": "Saturn",
    "Aquarius": "Uranus",
    "Pisces": "Neptune"
  };
  
  return planets[sign] || "Unknown";
};

const getLuckyColors = (sign: string): {name: string, hex: string}[] => {
  const colors: Record<string, {name: string, hex: string}[]> = {
    "Aries": [{name: "Red", hex: "#FF5252"}, {name: "White", hex: "#FFFFFF"}],
    "Taurus": [{name: "Green", hex: "#4CAF50"}, {name: "Pink", hex: "#FF80AB"}],
    "Gemini": [{name: "Yellow", hex: "#FFEB3B"}, {name: "Light Blue", hex: "#81D4FA"}],
    "Cancer": [{name: "Silver", hex: "#E0E0E0"}, {name: "White", hex: "#FFFFFF"}],
    "Leo": [{name: "Gold", hex: "#FFD700"}, {name: "Orange", hex: "#FF9800"}],
    "Virgo": [{name: "Green", hex: "#4CAF50"}, {name: "Brown", hex: "#795548"}],
    "Libra": [{name: "Pink", hex: "#FF80AB"}, {name: "Blue", hex: "#2196F3"}],
    "Scorpio": [{name: "Dark Red", hex: "#B71C1C"}, {name: "Black", hex: "#000000"}],
    "Sagittarius": [{name: "Purple", hex: "#9C27B0"}, {name: "Blue", hex: "#2196F3"}],
    "Capricorn": [{name: "Brown", hex: "#795548"}, {name: "Gray", hex: "#9E9E9E"}],
    "Aquarius": [{name: "Electric Blue", hex: "#1E88E5"}, {name: "Turquoise", hex: "#00BCD4"}],
    "Pisces": [{name: "Sea Green", hex: "#26A69A"}, {name: "Lavender", hex: "#B39DDB"}]
  };
  
  return colors[sign] || [{name: "Purple", hex: "#9C27B0"}];
};

const getLuckyGemstone = (sign: string): string => {
  const gemstones: Record<string, string> = {
    "Aries": "Diamond",
    "Taurus": "Emerald",
    "Gemini": "Tiger's Eye",
    "Cancer": "Pearl",
    "Leo": "Ruby",
    "Virgo": "Sapphire",
    "Libra": "Opal",
    "Scorpio": "Topaz",
    "Sagittarius": "Turquoise",
    "Capricorn": "Garnet",
    "Aquarius": "Amethyst",
    "Pisces": "Aquamarine"
  };
  
  return gemstones[sign] || "Crystal Quartz";
};

const getLuckyNumbers = (sign: string): number[] => {
  const numbers: Record<string, number[]> = {
    "Aries": [1, 9],
    "Taurus": [2, 6],
    "Gemini": [3, 5],
    "Cancer": [2, 7],
    "Leo": [1, 5],
    "Virgo": [5, 7],
    "Libra": [6, 9],
    "Scorpio": [4, 8],
    "Sagittarius": [3, 9],
    "Capricorn": [1, 4],
    "Aquarius": [7, 11],
    "Pisces": [3, 12]
  };
  
  return numbers[sign] || [7];
};
