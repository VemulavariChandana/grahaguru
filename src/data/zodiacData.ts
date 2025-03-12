
export const zodiacSigns = [
  {
    name: "Aries",
    dates: "March 21 - April 19",
    element: "Fire",
    traits: ["Confident", "Courageous", "Passionate", "Enthusiastic", "Leader"],
    symbol: "♈",
  },
  {
    name: "Taurus",
    dates: "April 20 - May 20",
    element: "Earth",
    traits: ["Reliable", "Patient", "Practical", "Devoted", "Responsible"],
    symbol: "♉",
  },
  {
    name: "Gemini",
    dates: "May 21 - June 20",
    element: "Air",
    traits: ["Adaptable", "Outgoing", "Intelligent", "Curious", "Versatile"],
    symbol: "♊",
  },
  {
    name: "Cancer",
    dates: "June 21 - July 22",
    element: "Water",
    traits: ["Emotional", "Intuitive", "Protective", "Nurturing", "Sympathetic"],
    symbol: "♋",
  },
  {
    name: "Leo",
    dates: "July 23 - August 22",
    element: "Fire",
    traits: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful"],
    symbol: "♌",
  },
  {
    name: "Virgo",
    dates: "August 23 - September 22",
    element: "Earth",
    traits: ["Analytical", "Meticulous", "Hardworking", "Practical", "Kind"],
    symbol: "♍",
  },
  {
    name: "Libra",
    dates: "September 23 - October 22",
    element: "Air",
    traits: ["Diplomatic", "Gracious", "Fair-minded", "Social", "Cooperative"],
    symbol: "♎",
  },
  {
    name: "Scorpio",
    dates: "October 23 - November 21",
    element: "Water",
    traits: ["Passionate", "Determined", "Magnetic", "Resourceful", "Brave"],
    symbol: "♏",
  },
  {
    name: "Sagittarius",
    dates: "November 22 - December 21",
    element: "Fire",
    traits: ["Optimistic", "Adventurous", "Honest", "Independent", "Philosophical"],
    symbol: "♐",
  },
  {
    name: "Capricorn",
    dates: "December 22 - January 19",
    element: "Earth",
    traits: ["Ambitious", "Disciplined", "Patient", "Responsible", "Traditional"],
    symbol: "♑",
  },
  {
    name: "Aquarius",
    dates: "January 20 - February 18",
    element: "Air",
    traits: ["Progressive", "Original", "Independent", "Humanitarian", "Intellectual"],
    symbol: "♒",
  },
  {
    name: "Pisces",
    dates: "February 19 - March 20",
    element: "Water",
    traits: ["Intuitive", "Artistic", "Compassionate", "Gentle", "Dreamy"],
    symbol: "♓",
  },
];

export const getRandomPrediction = (type: "career" | "love") => {
  const predictions = {
    career: [
      "A new opportunity will present itself soon. Stay alert and ready to embrace change.",
      "Your creative talents will be recognized by someone influential in your field.",
      "A period of professional growth is approaching. Focus on learning new skills.",
      "Trust your instincts in workplace decisions. Your intuition is particularly strong now.",
      "Collaboration will lead to success. Don't hesitate to reach out to others.",
      "A challenge at work will ultimately lead to greater recognition and rewards.",
      "Your persistence will pay off. Continue focusing on your long-term career goals.",
      "An unexpected mentor will provide valuable guidance. Be open to advice.",
      "A financial boost is on the horizon. Your hard work is about to be rewarded.",
      "Your leadership qualities will shine through in an upcoming project."
    ],
    love: [
      "An unexpected encounter could lead to a meaningful connection.",
      "Focus on self-love and personal growth to attract the right energy.",
      "A deep emotional bond will strengthen in the coming months.",
      "Communication will be key in your relationships. Express yourself honestly.",
      "A period of romantic harmony is approaching. Stay open to possibilities.",
      "Past relationships may resurface for closure. Handle with care and wisdom.",
      "Your charming nature will attract positive attention. Be your authentic self.",
      "Trust your intuition about a potential partner. Your inner voice is guiding you correctly.",
      "A current relationship will reach a new level of understanding and commitment.",
      "Balance giving and receiving in relationships for greater harmony and fulfillment."
    ],
  };

  const typeArray = predictions[type];
  return typeArray[Math.floor(Math.random() * typeArray.length)];
};
