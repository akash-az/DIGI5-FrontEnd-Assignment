// features/notes/notesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.unshift(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) state.notes[index] = action.payload;
    },
    removeTagFromNote: (state, action) => {
      const { noteId, tag } = action.payload;
      const note = state.notes.find((note) => note.id === noteId);
      if (note) {
        note.tags = note.tags.filter((t) => t !== tag);
      }
    },
  },
});

export const { addNote, deleteNote, editNote, removeTagFromNote } =
  notesSlice.actions;
export default notesSlice.reducer;
