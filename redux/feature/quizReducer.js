import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    score: 0,
    quiz_id: "",
  },

  reducers: {
    scoreHandler(state, action) {
      state.score += 1;
    },
    clearScore(state, action) {
      state.score = 0;
    },
    quizIdHandler(state, action) {
      state.quiz_id = action.payload;
    },
  },
});

export const { scoreHandler, clearScore, quizIdHandler } = quizSlice.actions;

export default quizSlice.reducer;
