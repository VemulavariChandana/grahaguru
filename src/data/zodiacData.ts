
export const zodiacSigns = [
  {
    name: "Aries",
    dates: "March 21 - April 19",
    element: "Fire",
    traits: ["Confident", "Courageous", "Enthusiastic"],
    symbol: "Ram",
  },
  {
    name: "Taurus",
    dates: "April 20 - May 20",
    element: "Earth",
    traits: ["Reliable", "Patient", "Practical"],
    symbol: "Bull",
  },
  {
    name: "Gemini",
    dates: "May 21 - June 20",
    element: "Air",
    traits: ["Adaptable", "Versatile", "Intellectual"],
    symbol: "Twins",
  },
  {
    name: "Cancer",
    dates: "June 21 - July 22",
    element: "Water",
    traits: ["Emotional", "Intuitive", "Protective"],
    symbol: "Crab",
  },
  {
    name: "Leo",
    dates: "July 23 - August 22",
    element: "Fire",
    traits: ["Creative", "Passionate", "Generous"],
    symbol: "Lion",
  },
  {
    name: "Virgo",
    dates: "August 23 - September 22",
    element: "Earth",
    traits: ["Analytical", "Hardworking", "Kind"],
    symbol: "Virgin",
  },
  {
    name: "Libra",
    dates: "September 23 - October 22",
    element: "Air",
    traits: ["Diplomatic", "Gracious", "Fair-minded"],
    symbol: "Scales",
  },
  {
    name: "Scorpio",
    dates: "October 23 - November 21",
    element: "Water",
    traits: ["Passionate", "Determined", "Magnetic"],
    symbol: "Scorpion",
  },
  {
    name: "Sagittarius",
    dates: "November 22 - December 21",
    element: "Fire",
    traits: ["Optimistic", "Adventurous", "Honest"],
    symbol: "Archer",
  },
  {
    name: "Capricorn",
    dates: "December 22 - January 19",
    element: "Earth",
    traits: ["Ambitious", "Disciplined", "Patient"],
    symbol: "Sea-Goat",
  },
  {
    name: "Aquarius",
    dates: "January 20 - February 18",
    element: "Air",
    traits: ["Progressive", "Original", "Independent"],
    symbol: "Water Bearer",
  },
  {
    name: "Pisces",
    dates: "February 19 - March 20",
    element: "Water",
    traits: ["Intuitive", "Artistic", "Compassionate"],
    symbol: "Fish",
  },
];

export const getRandomPrediction = (type: "career" | "love") => {
  const predictions = {
    career: [
      "A new opportunity will present itself soon. Stay alert and ready to embrace change.",
      "Your creative talents will be recognized by someone influential.",
      "A period of professional growth is approaching. Focus on learning new skills.",
      "Trust your instincts in workplace decisions. Your intuition is particularly strong.",
      "Collaboration will lead to success. Don't hesitate to reach out to others.",
    ],
    love: [
      "An unexpected encounter could lead to a meaningful connection.",
      "Focus on self-love and personal growth to attract the right energy.",
      "A deep emotional bond will strengthen in the coming months.",
      "Communication will be key in your relationships. Express yourself honestly.",
      "A period of romantic harmony is approaching. Stay open to possibilities.",
    ],
  };

  const typeArray = predictions[type];
  return typeArray[Math.floor(Math.random() * typeArray.length)];
};
