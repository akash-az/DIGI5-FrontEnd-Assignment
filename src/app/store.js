import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice";
import filtersReducer from "../features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    filters: filtersReducer,
  },
});

export default store;
