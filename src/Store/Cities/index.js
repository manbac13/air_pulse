import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as CitiesApi from "../../Api/Cities/index";

const initialState = {
  data: [],
  location: null,
  ui: {
    loading: false,
  },
};

const getCities = createAsyncThunk("cities/getCities", async (params) => {
  const res = await CitiesApi.getCities(params);
  return res.data;
});

const citiesSlice = createSlice({
  name: "cities",
  initialState: initialState,
  reducers: {
    clearData: (state) => {
      state.data = [];
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.ui.loading = false;
        state.data = action.payload;
      })
      .addCase(getCities.rejected, (state) => {
        state.ui.loading = false;
      });
  },
});

const { clearData, setLocation } = citiesSlice.actions;

export default citiesSlice.reducer;

export { getCities, clearData, setLocation };
