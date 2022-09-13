import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  dark: {
    primary: "#0d0d0d",
    secondary: "#131313",
  },
  light: {
    primary: "#FAF9F9",
    secondary: "#F2F2F2",
  },

  icon:{
    dark: "#FFFFFF",
    light: "#0091B5",
  }
  
};

const counterSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    // incremented(state) {
    //   state.value++;
    // },
    // amountAdded(state, action: PayloadAction<number>) {
    //   state.value += action.payload;
    // },

    loginHandler(state, action) {},
  },
});

export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
