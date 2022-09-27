import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../../Data";

const dataSlice = createSlice({
  name: "module",
  initialState: { data, result: 0, contentId: "" },
  reducers: {
    scrollHandler(state, action) {
      state.offsetY = action.payload;
    },
    progressBar(state, action) {
      state.result = action.payload;
    },
    contentIdHandler(state, action) {
      state.contentId = action.payload;
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
    contentStatus(state, action) {
      let moduleLength = state.data[0].modules.length;

      for (let i = 0; i < moduleLength; i++) {
        state.data[0].modules[i].topic.filter((value) => {
          if (value.id === state.contentId) {
            value.status = true;
          }
        });
      }
    },
  },
});

export const { scrollHandler, progressBar, contentStatus, contentIdHandler } =
  dataSlice.actions;

export default dataSlice.reducer;
