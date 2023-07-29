import { createSlice } from "@reduxjs/toolkit";

const visible1 = false;

const createHover1 = createSlice({
  name: "visible1",
  initialState: {value:visible1},
  reducers: {
    visible1Reducer: (state) => {
      // Correct way, directly mutate the state
      state.value = true;
    },
    notVisible1Reducer: (state) => {
      // Correct way, directly mutate the state
      state.value = false;
    },
  },
});

export const { visible1Reducer, notVisible1Reducer } = createHover1.actions;

export default createHover1.reducer;
