import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    student_id: "",
    username: "",
    password: "",
    email: "",
    user: [],
    currStudent_id: "",
    currUsername: "",
    currEmail: "",
  },

  reducers: {
    currUsernameLogin(state, action) {
      state.currUsername = action.payload;
    },
    currStudent_idLogin(state, action) {
      state.currStudent_id = action.payload;
    },
    currEmailLogin(state, action) {
      state.currEmail = action.payload;
    },
    userHandler(state, action) {
      state.user = action.payload;
    },
    usernameLogin(state, action) {
      state.username = action.payload;
    },
    passwordLogin(state, action) {
      state.password = action.payload;
    },
    emailLogin(state, action) {
      state.email = action.payload;
    },
    student_idLogin(state, action) {
      state.student_id = action.payload;
    },
  },
});

export const {
  currEmailLogin,
  currStudent_idLogin,
  currUsernameLogin,
  userHandler,
  emailLogin,
  passwordLogin,
  usernameLogin,
  student_idLogin,
} = loginSlice.actions;

export default loginSlice.reducer;
