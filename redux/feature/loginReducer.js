import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    password: "",
    email: "",
  },

  reducers: {
    usernameLogin(state, action) {
      state.username = action.payload;
    },
    passwordLogin(state, action) {
      state.password = action.payload;
    },
    emailLogin(state, action) {
      state.email = action.payload;
    },
  },
});

export const { emailLogin, passwordLogin, usernameLogin } = loginSlice.actions;

export default loginSlice.reducer;
