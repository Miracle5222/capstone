import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    username: "",
    password: "",
    email: "",
  },

  reducers: {
    usernameHandler(state, action) {
      state.username = action.payload;
    },
    passwordHandler(state, action) {
      state.password = action.payload;
    },
    emailHandler(state, action) {
      state.email = action.payload;
    },
  },
});

export const { emailHandler, passwordHandler, usernameHandler } =
  registerSlice.actions;

export default registerSlice.reducer;
