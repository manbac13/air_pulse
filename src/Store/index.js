import { configureStore } from "@reduxjs/toolkit";
import cities from "./Cities/index";
import weather from "./Weather/index";
import aqi from "./Aqi/index";
import forecast from "./Forecast/index";

const store = configureStore({
  reducer: {
    cities: cities,
    weather: weather,
    aqi: aqi,
    forecast: forecast,
  },
});

export default store;
