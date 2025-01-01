import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    isGPTSearch: false,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.isGPTSearch = !state.isGPTSearch;
    },
  },
});

export const { toggleGPTSearch } = gptSlice.actions;
export default gptSlice.reducer;
