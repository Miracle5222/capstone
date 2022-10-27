import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  username: "",
  errorMessage: "",
};

const counterSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // incremented(state) {
    //   state.value++;
    // },
    // amountAdded(state, action: PayloadAction<number>) {
    //   state.value += action.payload;
    // },

    emailHandler(state, action) {
      state.email = action.payload;
    },
    usernameHandler(state, action) {
      state.username = action.payload;
    },
    errorHandler(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const { emailHandler, usernameHandler, errorHandler } =
  counterSlice.actions;

export default counterSlice.reducer;
