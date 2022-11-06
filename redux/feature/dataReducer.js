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
  },
  reducers: {
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
    // language: "Java",
    // modules: [
    //   {
    //     key: "1",
    //     title: "Introduction",
    //     status: true,
    //     topic: [
    //       {
    //         id: "1.1",
    //         status: true,
    //         lesson_name: "A Quick First Look at Computer Programming",
    //         content: [
    //           {
    //             heading: "",
    //             video: "Hdf5OmERt0g",
    //             paragraph: "",
    //             code: [],
    //             image: [],
    //           },
    moduleStatusHandler(state, action) {
      let moduleInit = 0;

      let moduleLength = state.data[0].modules.length;
      // console.log(moduleLength);
      while (moduleInit < moduleLength) {
        state.data[0].modules[moduleInit].topic.map((val, index) => {
          if (val.id === action.payload) {
            val.status = "done";
          }
          // if (val.status === "done") {
          //   state.data[0].modules[moduleInit].topic[index + 1].status =
          //     "unlock";
          // }
        });

        moduleInit++;
      }
    },
    // initDataHandler(state, action) {
    //   let moduleInit = 0;
    //   let moduleLength = state.data[0].modules.length;

    //   while (moduleInit < moduleLength) {
    //     // console.log(state.data[0].modules[init].status);

    //     state.data[0].modules[moduleInit].topic.map((value, index) => {
    //       if (state.data[0].modules[moduleInit].topic[index - 1] >= 1) {
    //         if (
    //           state.data[0].modules[moduleInit].topic[index - 1].status ===
    //           "done"
    //         ) {
    //           value.status = "unlock";
    //         }
    //       }
    //     });

    //     moduleInit++;
    //   }
    // },
    // lessonStatusHandler(state, action) {
    //   let lessonLength = state.data[0].modules[2].topic.length;
    //   // console.log(lessonLength);
    // },
  },
});

export const {
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
