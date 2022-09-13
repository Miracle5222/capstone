import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
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

    loginHandler(state,action){
      
    }
  },
});

export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
