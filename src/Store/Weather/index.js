import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as WeatherApi from "../../Api/Weather/index";

const initialState = {
  currentWeather: null,
  metroCities: [
    {
      name: "Mumbai",
      key: "mumbai",
      lat: 19.07609,
      lon: 72.877426,
      status: "active",
    },
    {
      name: "Delhi",
      key: "delhi",
      lat: 28.61394,
      lon: 77.209021,
      status: "active",
    },
    {
      name: "Kolkata",
      key: "kolkata",
      lat: 22.572645,
      lon: 88.363892,
      status: "active",
    },
    {
      name: "Chennai",
      key: "chennai",
      lat: 13.08268,
      lon: 80.270718,
      status: "active",
    },
    {
      name: "Bengaluru",
      key: "bengaluru",
      lat: 12.971599,
      lon: 77.594566,
      status: "inactive",
    },
    {
      name: "Hyderabad",
      key: "hyderabad",
      lat: 17.385044,
      lon: 78.486671,
      status: "inactive",
    },
    {
      name: "Ahmedabad",
      key: "ahmedabad",
      lat: 23.022505,
      lon: 72.571365,
      status: "inactive",
    },
    {
      name: "Pune",
      key: "pune",
      lat: 18.52043,
      lon: 73.856744,
      status: "active",
    },
    {
      name: "Jaipur",
      key: "jaipur",
      lat: 26.912434,
      lon: 75.78727,
      status: "inactive",
    },
    {
      name: "Surat",
      key: "surat",
      lat: 21.17024,
      lon: 72.831061,
      status: "inactive",
    },
  ],
  ui: {
    loading: false,
  },
};

const getCurrentWeatherData = createAsyncThunk(
  "weather/getCurrentWeatherData",
  async (params) => {
    const res = await WeatherApi.getCurrentWeatherData(params);
    return res.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeatherData.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(getCurrentWeatherData.fulfilled, (state, action) => {
        state.ui.loading = false;
        state.currentWeather = action.payload;
      })
      .addCase(getCurrentWeatherData.rejected, (state, action) => {
        state.ui.loading = false;
      });
  },
});

const {} = weatherSlice.actions;

export default weatherSlice.reducer;

export { getCurrentWeatherData };
