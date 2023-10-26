import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../slices/appSlice";
import cacheSlice from "../slices/cacheSlice";
import chatSlices from "../slices/chatSlices";
import moodSlice from "../slices/moodSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  moodSlice
);

export const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    chat: chatSlices,
    moods: persistedReducer,
  },
});



export const persistor = persistStore(store);
