import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice";
import filtersReducer from "../features/filters/filtersSlice";

// Load state from localStorage
const loadState = () => {
  try {
    const newState = localStorage.getItem("notesAppState");
    if (newState === null) {
      return undefined;
    }
    return JSON.parse(newState);
  } catch (err) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const newState = JSON.stringify(state);
    localStorage.setItem("notesAppState", newState);
  } catch {}
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    notes: notesReducer,
    filters: filtersReducer,
  },
  preloadedState: persistedState,
});

// Subscribe to store changes
store.subscribe(() => {
  saveState({
    notes: store.getState().notes,
    filters: store.getState().filters,
  });
});

export default store;
