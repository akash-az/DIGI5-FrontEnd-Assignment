import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";

export default function NoteList() {
  const notes = useSelector((state) => state.notes.notes);
  const selectedTag = useSelector((state) => state.filters.selectedTag);

  const filteredNotes = selectedTag
    ? notes.filter((note) => note.tags.includes(selectedTag))
    : notes;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}
