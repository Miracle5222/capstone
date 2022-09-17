import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../../Data";

const dataSlice = createSlice({
  name: "module",
  initialState: { data },
  reducers: {
    scrollHandler(state, action) {
      state.offsetY = action.payload;
    },
  },
});

export const { scrollHandler } = dataSlice.actions;

export default dataSlice.reducer;
