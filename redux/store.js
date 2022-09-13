import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./feature/ScrollReducer";

export const store = configureStore({
  reducer: { scroll: scrollReducer },
});
