import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const codeSlice = createSlice({
  name: "code",
  initialState: {
    codeResult: "",
    problem: "",
  },

  reducers: {
    codeHandler(state, action) {
      state.code = action.payload;
    },
    problemCode(state, action) {
      state.problem = action.payload;
    },
  },
});

export const { codeHandler, problemCode } = codeSlice.actions;

export default codeSlice.reducer;
