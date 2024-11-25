import {
  WiCloud,
  WiCloudy,
  WiDayFog,
  WiDayHaze,
  WiDayLightWind,
  WiDayRain,
  WiDayRainMix,
  WiDayShowers,
  WiDaySnow,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayThunderstorm,
  WiDust,
  WiSandstorm,
  WiSmoke,
  WiTornado,
} from "weather-icons-react";

export const convertTimeIst = (timeStamp) => {
  if (timeStamp) {
    const date = new Date(timeStamp * 1000); // Convert seconds to milliseconds

    // Convert the date to IST (UTC +5:30)
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // For AM/PM format
    };

    return new Intl.DateTimeFormat("en-IN", options).format(date);
  }
};

export const weatherIcon = (desc, size, color) => {
  switch (desc) {
    case "Clear":
      return <WiDaySunny size={size} color={color} />;
    case "Haze":
      return <WiDayHaze size={size} color={color} />;
    case "Fog":
      return <WiDayFog size={size} color={color} />;
    case "Clouds":
      return <WiCloudy size={size} color={color} />;
    case "Rain":
    case "Drizzle":
      return <WiDayRain size={size} color={color} />;
    case "Thunderstorm":
      return <WiDayThunderstorm size={size} color={color} />;
    case "Snow":
      return <WiDaySnow size={size} color={color} />;
    case "Mist":
      return <WiDayLightWind size={size} color={color} />;
    case "Smoke":
      return <WiSmoke size={size} color={color} />;
    case "Tornado":
      return <WiTornado size={size} color={color} />;
    case "Dust":
      return <WiDust size={size} color={color} />;
    case "Sand":
      return <WiSandstorm size={size} color={color} />;
    default:
      return <WiDaySunnyOvercast size={size} color={color} />;
  }
};

export const separateTodayTom = (data) => {
  if (data) {
    const now = new Date();

    // Start of today (midnight)
    const startOfToday =
      new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() /
      1000;

    // Start of tomorrow (midnight of the next day)
    const startOfTomorrow =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() /
      1000;

    // Start of the day after tomorrow
    const startOfDayAfterTomorrow =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2).getTime() /
      1000;

    // Filter forecasts for today and tomorrow
    const todayForecasts = data?.filter(({ dt }) => {
      const localTime = dt + new Date().getTimezoneOffset() * 60; // Convert UTC to local
      return localTime >= startOfToday && localTime < startOfTomorrow;
    });

    // Convert UTC timestamps to local time and filter for tomorrow
    const tomorrowForecasts = data?.filter(({ dt }) => {
      const localTime = dt + new Date().getTimezoneOffset() * 60; // Convert UTC to local
      return (
        localTime >= startOfTomorrow && localTime < startOfDayAfterTomorrow
      );
    });
    return {
      today: todayForecasts,
      tomorrow: tomorrowForecasts,
    };
  }
};
