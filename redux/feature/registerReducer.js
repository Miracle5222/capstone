import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    username: "",
    password: "",
    email: "",

    errorEmail: "",
    errorUsername: "",
    registered: "",
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
    registeredHandler(state, action) {
      state.registered = action.payload;
    },
    errorEmaildHandler(state, action) {
      state.errorEmail = action.payload;
    },
    errorUsernameHandler(state, action) {
      state.errorUsername = action.payload;
    },
  },
});

export const {
  emailHandler,
  passwordHandler,
  usernameHandler,
  registeredHandler,
  errorUsernameHandler,
  errorEmaildHandler,
} = registerSlice.actions;

export default registerSlice.reducer;
