import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./feature/ColorReducer";
import scrollReducer from "./feature/scrollReducer";
import dataReducer from "./feature/dataReducer";
import contentReducer from "./feature/contentReducer";
import registerReducer from "./feature/registerReducer";
import loginReducer from "./feature/loginReducer";
import quizReducer from "./feature/quizReducer";
import codeReducer from "./feature/codeReducer";

export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    color: colorReducer,
    module: dataReducer,
    content: contentReducer,
    register: registerReducer,
    login: loginReducer,
    quiz: quizReducer,
    code: codeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
});
