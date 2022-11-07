import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../../Data";

const dataSlice = createSlice({
  name: "module",
  initialState: {
    data,
    result: 0,
    contentId: "",
    theme: false,
    subLesson: [],
    code: [],
    update: false,
    length: 0,
    done: 0,
    unlock: 0,
    lock: 0,
    baseUrl: "https://f691-2001-4455-1dc-b00-c8f6-ba6a-bf6a-ea88.ap.ngrok.io",
  },

  reducers: {
    doneHandler(state, action) {
      state.done = (action.payload * 100) / action.payload;
    },
    unlockHandler(state, action) {
      state.unlock = (action.payload * 100) / action.payload;
    },
    lockHandler(state, action) {
      state.lock = (action.payload * 100) / action.payload;
    },
    lengthHandler(state, action) {
      state.length = action.payload;
    },
    updateHandler(state, action) {
      state.update = !state.update;
    },
    scrollHandler(state, action) {
      state.offsetY = action.payload;
    },
    progressBar(state, action) {
      state.result = action.payload;
    },
    contentIdHandler(state, action) {
      state.contentId = action.payload;
    },

    dataHandler(state, action) {
      state.data = action.payload;
    },
    subLessonHandler(state, action) {
      state.subLesson = action.payload;
    },
    codeHandler(state, action) {
      state.code = action.payload;
    },
    // moduleStatusHandler(state, action) {
    //   let moduleInit = 0;

    //   let moduleLength = state.data[0].modules.length;
    //   // console.log(moduleLength);
    //   while (moduleInit < moduleLength) {
    //     state.data[0].modules[moduleInit].topic.map((val, index) => {
    //       if (val.id === action.payload) {
    //         val.status = "done";
    //       }
    //       // if (val.status === "done") {
    //       //   state.data[0].modules[moduleInit].topic[index + 1].status =
    //       //     "unlock";
    //       // }
    //     });

    //     moduleInit++;
    //   }
    // },
  },
});

export const {
  lengthHandler,
  lockHandler,
  unlockHandler,
  doneHandler,
  updateHandler,
  subLessonHandler,
  codeHandler,
  scrollHandler,
  progressBar,
  contentStatus,
  contentIdHandler,
  dataHandler,
  moduleStatusHandler,
  lessonStatusHandler,
  initDataHandler,
} = dataSlice.actions;

export default dataSlice.reducer;
