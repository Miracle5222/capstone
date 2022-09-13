import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    offsetY: 0,
  },
  reducers: {
    scrollHandler(state, action) {
      state.offsetY += action.payload;
    },
  },
});

export const { scrollHandler } = scrollSlice.actions;

export default scrollSlice.reducer;
