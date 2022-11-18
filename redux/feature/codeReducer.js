import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const codeSlice = createSlice({
  name: "code",
  initialState: {
    codeResult: "",
    problem: "",
    ind: 0,
  },

  reducers: {
    codeHandler(state, action) {
      state.code = action.payload;
    },
    problemCode(state, action) {
      state.problem = action.payload;
    },

    currentIndexHandler(state, action) {
      state.ind += 1;
    },
    currentInitHandler(state, action) {
      state.ind = 0;
    },
  },
});

export const {
  codeHandler,
  problemCode,
  currentIndexHandler,
  currentInitHandler,
} = codeSlice.actions;

export default codeSlice.reducer;
