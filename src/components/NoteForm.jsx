// NoteForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/notes/notesSlice";

export default function NoteForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagsInput, setTagsInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);

    const note = {
      id: Date.now(),
      title,
      content,
      tags,
    };

    dispatch(addNote(note));

    // Reset form
    setTitle("");
    setContent("");
    setTagsInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 border border-slate-200 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <input
        type="text"
        placeholder="Add tags (comma separated)"
        value={tagsInput}
        onChange={(e) => setTagsInput(e.target.value)}
        className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        Add Note
      </button>
    </form>
  );
}
