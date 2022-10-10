import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  darkBg: {
    primary: "#0d0d0d",
    secondary: "#131313",
  },
  lightBg: {
    primary: "#FFFFFF",
    secondary: "#F2F2F2",
    tertiary: "#E3E3E3",
    fortiary: "#E2E2E2",
  },

  icon: {
    dark: "#FFFFFF",
    light: "#0091B5",
  },
  text: {
    light: "#ffffff",
    dark: "#161616",

    primary: "#00CDBD",
    secondary: "#00596F",
  },
  buttons: {
    light: "#00596F",
    dark: "#021F26",
  },
  sizes: {
    xlarge: 58,
    large: 36,
    medium: 24,
    small: 18,
    xsmall: 14,
  },
  theme: true,
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    // incremented(state) {
    //   state.value++;
    // },
    // amountAdded(state, action: PayloadAction<number>) {
    //   state.value += action.payload;
    // },
    changeColor(state) {
      state;
    },
  },
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
