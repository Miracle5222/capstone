import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    score: 0,
  },

  reducers: {
    scoreHandler(state, action) {
      state.score += 1;
    },
    clearScore(state, action) {
      state.score = 0;
    },
  },
});

export const { scoreHandler, clearScore } = quizSlice.actions;

export default quizSlice.reducer;
