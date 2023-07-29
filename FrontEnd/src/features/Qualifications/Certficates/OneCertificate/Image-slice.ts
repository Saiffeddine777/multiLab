import { createSlice } from "@reduxjs/toolkit";

const visible = false;

const createHover = createSlice({
  name: "visible",
  initialState: {value:visible},
  reducers: {
    visibleReducer: (state) => {
      // Correct way, directly mutate the state
      state.value = true;
    },
    notVisibleReducer: (state) => {
      // Correct way, directly mutate the state
      state.value = false;
    },
  },
});

export const { visibleReducer, notVisibleReducer } = createHover.actions;

export default createHover.reducer;
