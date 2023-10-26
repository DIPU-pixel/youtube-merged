import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../slices/appSlice";
import cacheSlice from "../slices/cacheSlice";
import chatSlices from "../slices/chatSlices";
import moodSlice from "../slices/moodSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    chat: chatSlices,
    moods: moodSlice,
  },
});
export default store;
