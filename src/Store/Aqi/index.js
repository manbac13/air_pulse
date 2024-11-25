import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as AirAqi from "../../Api/Aqi/index";

const initialState = {
  data: null,
  ui: {
    loading: false,
  },
};

const getAqi = createAsyncThunk("aqi/getAqi", async (params) => {
  const res = await AirAqi.getAqi(params);
  return res.data;
});

const aqiSlice = createSlice({
  name: "aqi",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAqi.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(getAqi.fulfilled, (state, action) => {
        state.data = action.payload;
        state.ui.loading = false;
      })
      .addCase(getAqi.rejected, (state) => {
        state.ui.loading = false;
      });
  },
});

const {} = aqiSlice.actions;

export default aqiSlice.reducer;

export { getAqi };
