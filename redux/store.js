import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./feature/colorReducer";
import scrollReducer from "./feature/scrollReducer";
import dataReducer from "./feature/dataReducer";
import contentReducer from "./feature/contentReducer";

export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    color: colorReducer,
    module: dataReducer,
    content: contentReducer,
  },
});
