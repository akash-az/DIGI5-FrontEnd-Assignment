import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  tags: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote = action.payload;
      state.notes.unshift(newNote);

      // Update tags list
      newNote.tags.forEach((tag) => {
        if (!state.tags.includes(tag)) {
          state.tags.push(tag);
        }
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
