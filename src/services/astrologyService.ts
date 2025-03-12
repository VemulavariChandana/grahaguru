
// This service fetches horoscope data from an API
export const fetchHoroscope = async (sign: string) => {
  try {
    // Fallback data in case the API is unavailable
    const fallbackData = {
      current_date: new Date().toLocaleDateString(),
      compatibility: getCompatibilityForSign(sign),
      lucky_time: getLuckyTimeForSign(),
      lucky_number: Math.floor(Math.random() * 100),
      color: getLuckyColorForSign(sign),
      date_range: getDateRangeForSign(sign),
      mood: getMoodForSign(),
      description: getDescriptionForSign(sign),
    };

    // Try to fetch from API first
    try {
      const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
        method: 'POST'
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch horoscope data');
      }
      
      const data = await response.json();
      return data;
    } catch (apiError) {
      console.warn('API request failed, using fallback data', apiError);
      // Use fallback data if API fails
      return fallbackData;
    }
  } catch (error) {
    console.error('Error in fetchHoroscope:', error);
    throw error;
  }
};

// Helper functions for fallback data
const getCompatibilityForSign = (sign: string): string => {
  const compatibilities: Record<string, string> = {
    "aries": "Libra",
    "taurus": "Scorpio",
    "gemini": "Sagittarius",
    "cancer": "Capricorn",
    "leo": "Aquarius",
    "virgo": "Pisces",
    "libra": "Aries",
    "scorpio": "Taurus",
    "sagittarius": "Gemini",
    "capricorn": "Cancer",
    "aquarius": "Leo",
    "pisces": "Virgo"
  };
  
  return compatibilities[sign] || "Libra";
};

const getLuckyTimeForSign = (): string => {
  const hours = Math.floor(Math.random() * 12) + 1;
  const minutes = Math.floor(Math.random() * 60);
  const period = Math.random() > 0.5 ? "AM" : "PM";
  
  return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
};

const getLuckyColorForSign = (sign: string): string => {
  const colors: Record<string, string> = {
    "aries": "Red",
    "taurus": "Green",
    "gemini": "Yellow",
    "cancer": "Silver",
    "leo": "Gold",
    "virgo": "Navy Blue",
    "libra": "Pink",
    "scorpio": "Maroon",
    "sagittarius": "Purple",
    "capricorn": "Brown",
    "aquarius": "Turquoise",
    "pisces": "Sea Green"
  };
  
  return colors[sign] || "Blue";
};

const getDateRangeForSign = (sign: string): string => {
  const dateRanges: Record<string, string> = {
    "aries": "Mar 21 - Apr 19",
    "taurus": "Apr 20 - May 20",
    "gemini": "May 21 - Jun 20",
    "cancer": "Jun 21 - Jul 22",
    "leo": "Jul 23 - Aug 22",
    "virgo": "Aug 23 - Sep 22",
    "libra": "Sep 23 - Oct 22",
    "scorpio": "Oct 23 - Nov 21",
    "sagittarius": "Nov 22 - Dec 21",
    "capricorn": "Dec 22 - Jan 19",
    "aquarius": "Jan 20 - Feb 18",
    "pisces": "Feb 19 - Mar 20"
  };
  
  return dateRanges[sign] || "";
};

const getMoodForSign = (): string => {
  const moods = [
    "Happy", "Reflective", "Energetic", "Creative", "Calm", 
    "Focused", "Passionate", "Balanced", "Inspired", "Optimistic"
  ];
  
  return moods[Math.floor(Math.random() * moods.length)];
};

const getDescriptionForSign = (sign: string): string => {
  const descriptions: Record<string, string> = {
    "aries": "Today brings new opportunities for advancement. Your natural leadership abilities will be recognized, making this an excellent time to propose new ideas. Be mindful of your impulses and take time to consider consequences before making important decisions.",
    
    "taurus": "Your practical approach to challenges will serve you well today. Financial matters are highlighted, with potential for growth if you remain grounded in your decisions. A friend or colleague may seek your advice - your wisdom will be valuable.",
    
    "gemini": "Communication flows easily for you today. It's an excellent time for networking, sharing ideas, or resolving misunderstandings. Your adaptability allows you to navigate changing circumstances with grace. Pay attention to important details that others might miss.",
    
    "cancer": "Your intuition is especially strong today. Trust your inner voice when making decisions about home and family matters. It's a good day to focus on self-care and emotional well-being. An unexpected message may bring comfort or closure.",
    
    "leo": "The spotlight finds you today, offering chances to showcase your talents. Creative endeavors are especially favored. Your natural charisma attracts support from influential people. Remember to share credit with those who help you along the way.",
    
    "virgo": "Your analytical skills are heightened today, making it an excellent time to solve complex problems. Pay attention to health and wellness routines - small improvements can lead to significant benefits. A methodical approach will help you achieve precision in all your endeavors.",
    
    "libra": "Harmony in relationships brings you joy today. It's a favorable time for negotiations, compromises, and establishing balanced agreements. Your artistic sensibilities are enhanced, making this an excellent day for creative or aesthetic decisions.",
    
    "scorpio": "Your perceptiveness allows you to see beyond surface appearances today. It's an auspicious time for research, investigation, or uncovering hidden information. Transformation is possible in an area that has long been stagnant.",
    
    "sagittarius": "Adventure calls to you today, whether through travel, education, or philosophical exploration. Your optimism inspires those around you. Look for opportunities to expand your horizons and embrace new experiences with your characteristic enthusiasm.",
    
    "capricorn": "Professional matters take center stage today. Your disciplined approach earns recognition from superiors. Long-term planning is favored, especially regarding career or financial goals. Remember that steady progress leads to lasting achievements.",
    
    "aquarius": "Your innovative thinking solves problems in unexpected ways today. Collaborative projects benefit from your unique perspective. Technology and humanitarian concerns may feature prominently. Allow yourself to embrace unconventional approaches.",
    
    "pisces": "Your compassionate nature touches others deeply today. Creative and spiritual pursuits are especially rewarding. Trust your dreams and intuitions as they contain valuable guidance. Setting healthy boundaries helps you maintain your emotional well-being."
  };
  
  return descriptions[sign] || "Today brings a mix of challenges and opportunities. Stay centered and approach each situation with mindfulness. Your intuition will guide you toward the right decisions if you take time to listen to your inner voice.";
};
