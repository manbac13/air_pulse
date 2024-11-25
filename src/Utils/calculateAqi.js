// Breakpoints for supported pollutants based on US AQI standards
const breakpoints = {
  pm2_5: [
    { C_low: 0, C_high: 12, I_low: 0, I_high: 50 },
    { C_low: 12.1, C_high: 35.4, I_low: 51, I_high: 100 },
    { C_low: 35.5, C_high: 55.4, I_low: 101, I_high: 150 },
    { C_low: 55.5, C_high: 150.4, I_low: 151, I_high: 200 },
    { C_low: 150.5, C_high: 250.4, I_low: 201, I_high: 300 },
    { C_low: 250.5, C_high: 350.4, I_low: 301, I_high: 400 },
    { C_low: 350.5, C_high: 500.4, I_low: 401, I_high: 500 },
  ],
  pm10: [
    { C_low: 0, C_high: 54, I_low: 0, I_high: 50 },
    { C_low: 55, C_high: 154, I_low: 51, I_high: 100 },
    { C_low: 155, C_high: 254, I_low: 101, I_high: 150 },
    { C_low: 255, C_high: 354, I_low: 151, I_high: 200 },
    { C_low: 355, C_high: 424, I_low: 201, I_high: 300 },
    { C_low: 425, C_high: 504, I_low: 301, I_high: 400 },
    { C_low: 505, C_high: 604, I_low: 401, I_high: 500 },
  ],
  o3: [
    { C_low: 0, C_high: 54, I_low: 0, I_high: 50 },
    { C_low: 55, C_high: 70, I_low: 51, I_high: 100 },
    { C_low: 71, C_high: 85, I_low: 101, I_high: 150 },
    { C_low: 86, C_high: 105, I_low: 151, I_high: 200 },
    { C_low: 106, C_high: 200, I_low: 201, I_high: 300 },
  ],
  no2: [
    { C_low: 0, C_high: 53, I_low: 0, I_high: 50 },
    { C_low: 54, C_high: 100, I_low: 51, I_high: 100 },
    { C_low: 101, C_high: 360, I_low: 101, I_high: 150 },
    { C_low: 361, C_high: 649, I_low: 151, I_high: 200 },
    { C_low: 650, C_high: 1249, I_low: 201, I_high: 300 },
    { C_low: 1250, C_high: 2049, I_low: 301, I_high: 400 },
    { C_low: 2050, C_high: 3049, I_low: 401, I_high: 500 },
  ],
  so2: [
    { C_low: 0, C_high: 35, I_low: 0, I_high: 50 },
    { C_low: 36, C_high: 75, I_low: 51, I_high: 100 },
    { C_low: 76, C_high: 185, I_low: 101, I_high: 150 },
    { C_low: 186, C_high: 304, I_low: 151, I_high: 200 },
    { C_low: 305, C_high: 604, I_low: 201, I_high: 300 },
    { C_low: 605, C_high: 804, I_low: 301, I_high: 400 },
    { C_low: 805, C_high: 1004, I_low: 401, I_high: 500 },
  ],
  co: [
    { C_low: 0, C_high: 4.4, I_low: 0, I_high: 50 },
    { C_low: 4.5, C_high: 9.4, I_low: 51, I_high: 100 },
    { C_low: 9.5, C_high: 12.4, I_low: 101, I_high: 150 },
    { C_low: 12.5, C_high: 15.4, I_low: 151, I_high: 200 },
    { C_low: 15.5, C_high: 30.4, I_low: 201, I_high: 300 },
    { C_low: 30.5, C_high: 40.4, I_low: 301, I_high: 400 },
    { C_low: 40.5, C_high: 50.4, I_low: 401, I_high: 500 },
  ],
};

// Health Concern Levels
export const healthLevels = [
  {
    range: [0, 50],
    level: "Good",
    color: "#4caf50",
    message: "Air quality is good; enjoy your day!",
  }, // Green
  {
    range: [51, 100],
    level: "Moderate",
    color: "#ffeb3b",
    message:
      "Air quality is acceptable, sensitive groups should limit prolonged outdoor activity.",
  }, // Yellow
  {
    range: [101, 150],
    level: "Unhealthy for Sensitive Groups",
    color: "#ff9800",
    message:
      "Air quality is unhealthy for sensitive groups; limit outdoor activities.",
  }, // Orange
  {
    range: [151, 200],
    level: "Unhealthy",
    color: "#f44336",
    message:
      "Air quality is unhealthy, everyone should reduce outdoor activities.",
  }, // Red
  {
    range: [201, 300],
    level: "Very Unhealthy",
    color: "#e91e63",
    message: "Very unhealthy air, stay indoors and avoid outdoor activities.",
  }, // Pink
  {
    range: [301, 500],
    level: "Hazardous",
    color: "#9c27b0",
    message: "Hazardous air quality, stay indoors and use air filtration.",
  }, // Purple
];

// Function to determine health concern level based on AQI
function getHealthConcern(aqi) {
  for (const { range, level, message } of healthLevels) {
    if (aqi >= range[0] && aqi <= range[1]) {
      return { level, message };
    }
  }
  return "Unknown"; // Fallback for out-of-range AQI
}

// Function to calculate AQI for a single pollutant
function calculateAQI(concentration, pollutant) {
  const bp = breakpoints[pollutant];
  if (!bp) return null; // Ignore pollutants without defined breakpoints
  for (let i = 0; i < bp.length; i++) {
    const { C_low, C_high, I_low, I_high } = bp[i];
    if (concentration >= C_low && concentration <= C_high) {
      return (
        ((I_high - I_low) / (C_high - C_low)) * (concentration - C_low) + I_low
      );
    }
  }
  return null; // Out of range
}

// Function to calculate overall AQI and health concern level
export function calculateOverallAQI(pollutants) {
  if (pollutants) {
    console.log("pollutiants passed", pollutants);
    const aqiValues = [];
    for (const [pollutant, concentration] of Object.entries(pollutants)) {
      if (breakpoints[pollutant]) {
        // Only calculate for valid pollutants
        const aqi = calculateAQI(concentration, pollutant);
        if (aqi !== null) aqiValues.push(aqi);
      }
    }
    if (aqiValues.length > 0) {
      const overallAQI = Math.max(...aqiValues); // Final AQI is the maximum value
      return {
        aqi: Math.round(overallAQI),
        healthConcern: getHealthConcern(overallAQI)?.level,
        message: getHealthConcern(overallAQI)?.message,
      };
    }
    return { aqi: null, healthConcern: "No valid pollutants" }; // Fallback
  }
}
