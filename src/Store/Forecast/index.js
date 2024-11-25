import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as ForecastApi from "../../Api/Forecast/index";
import { separateTodayTom } from "../../Utils/Common";

const initialState = {
  data: [],
  today: [],
  tomorrow: [],
  ui: {
    loading: false,
  },
};

const getForecast = createAsyncThunk("forecast/getForecast", async (params) => {
  const res = await ForecastApi.getForecast(params);
  return res.data;
});

const forecastSlice = createSlice({
  name: "forecast",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getForecast.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(getForecast.fulfilled, (state, action) => {
        const modifiedData = separateTodayTom(action.payload?.list);
        console.log("modified data", modifiedData);
        state.data = action.payload;
        state.today = modifiedData?.today;
        state.tomorrow = modifiedData?.tomorrow;
        state.ui.loading = false;
      })
      .addCase(getForecast.rejected, (state) => {
        state.ui.loading = false;
      });
  },
});

const {} = forecastSlice.actions;

export default forecastSlice.reducer;

export { getForecast };
