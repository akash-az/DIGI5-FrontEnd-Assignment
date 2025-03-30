import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteNote,
  editNote,
  removeTagFromNote,
} from "../features/notes/notesSlice";

export default function NoteItem({ note }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    dispatch(
      editNote({
        ...note,
        title: editedTitle,
        content: editedContent,
      })
    );
    setIsEditing(false);
  };

  const handleTagRemove = (tag) => {
    dispatch(
      removeTagFromNote({
        noteId: note.id,
        tag,
      })
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">
          {isEditing ? (
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full p-1 border-b-2 border-blue-200 focus:outline-none focus:border-blue-500"
            />
          ) : (
            note.title
          )}
        </h3>

        <div className="flex gap-2">
          <button
            onClick={() =>
              isEditing ? setIsEditing(false) : setIsEditing(true)
            }
            className={`px-2 py-1 rounded ${
              isEditing
                ? "bg-gray-500 text-white hover:bg-gray-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          {!isEditing && (
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 my-3"></div>

      <div className="mb-4">
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        ) : (
          <p className="text-gray-600 whitespace-pre-wrap">{note.content}</p>
        )}
      </div>

      <div className="border-t border-gray-200 my-3"></div>

      <div className="flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center gap-1"
          >
            {tag}
            <button
              onClick={() => handleTagRemove(tag)}
              className="text-blue-800 hover:text-blue-900 ml-1"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {isEditing && (
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
