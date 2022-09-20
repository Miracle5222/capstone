import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "module",
  initialState: { contentId: "", content: [], index: 0 },
  reducers: {
    contentHandler(state, action) {
      state.content = action.payload;
    },
    contentIdHandler(state, action) {
      state.contentId = action.payload;
    },
    backHandler(state) {
      state.index -= 1;
    },
    nextHandler(state) {
      state.index += 1;
    },
  },
});

export const { contentHandler, contentIdHandler, nextHandler, backHandler } =
  contentSlice.actions;

export default contentSlice.reducer;
