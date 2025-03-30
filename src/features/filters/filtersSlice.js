import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTag: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterTag: (state, action) => {
      state.selectedTag = action.payload;
    },
  },
});

export const { setFilterTag } = filtersSlice.actions;
export default filtersSlice.reducer;
