import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackHandler } from "react-native-web";

const contentSlice = createSlice({
  name: "module",
  initialState: { contentId: "", content: [], index: 0, status: null },
  reducers: {
    contentHandler(state, action) {
      state.content = action.payload;
    },
    contentIdHandler(state, action) {
      state.contentId = action.payload;
    },
    nextHandler(state, action) {
      state.index += 1;
    },
    backHandler(state, action) {
      if (state.index === 0) {
        return state.index;
      }
      state.index -= 1;
    },
    indexInitialState(state, action) {
      state.index = 0;
    },
  },
});

export const {
  contentHandler,
  contentIdHandler,
  indexInitialState,
  backHandler,
  nextHandler,
} = contentSlice.actions;

export default contentSlice.reducer;
