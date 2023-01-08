import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["model x", "model y", "model s", "solar Panels"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;
export default carSlice.reducer;
