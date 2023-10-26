import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    searchCache: (state, action) => {
      state=Object.assign(state,action.payload)
    },
  },
});
export const  {searchCache}  = cacheSlice.actions;
export default cacheSlice.reducer;
