import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./feature/colorReducer";
import scrollReducer from "./feature/scrollReducer";

export const store = configureStore({
  reducer: { scroll: scrollReducer, color: colorReducer },
});
