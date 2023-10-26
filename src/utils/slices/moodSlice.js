import { createSlice } from "@reduxjs/toolkit";

const moodSlice = createSlice({
  name: "mood",
  initialState: {
    moods: false,
  },
  reducers: {
    toggleMode: (state, action) => {
      state.moods = !state.moods;
    },
  },
});
export const { toggleMode } = moodSlice.actions;
export default moodSlice.reducer;
