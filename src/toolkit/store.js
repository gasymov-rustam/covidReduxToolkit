import { configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./tollkitSlice";

export const store = configureStore({
  reducer: {
    toolkit: toolkitSlice,
  },
});
