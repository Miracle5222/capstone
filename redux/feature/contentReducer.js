import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "module",
  initialState: { contentId: "", content: [] },
  reducers: {
    contentHandler(state, action) {
      state.content = action.payload;
    },
    contentIdHandler(state, action) {
      state.contentId = action.payload;
    },
  },
});

export const { contentHandler, contentIdHandler } = contentSlice.actions;

export default contentSlice.reducer;
