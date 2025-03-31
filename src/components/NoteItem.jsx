import { useState, useEffect, useRef } from "react";
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
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current && isEditing) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [editedContent, isEditing]);

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

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 break-words border border-gray-200 hover:border-blue-100 transition-colors">
      <div className="flex justify-between items-start mb-2 gap-2">
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full p-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 text-lg font-semibold transition-colors"
              placeholder="Note title"
            />
          ) : (
            <h3 className="text-lg font-semibold break-words overflow-hidden">
              {note.title}
            </h3>
          )}
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 text-sm border border-blue-600 transition-colors"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          {!isEditing && (
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 text-sm border border-red-600 transition-colors"
            >
              Delete
            </button>
          )}
        </div>
      </div>

      <div className="my-3 border-t border-gray-100"></div>

      <div className="mb-4">
        {isEditing ? (
          <textarea
            ref={textareaRef}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none overflow-hidden transition-colors"
            style={{ minHeight: "100px" }}
          />
        ) : (
          <pre className="text-gray-600 whitespace-pre-wrap break-words font-sans overflow-hidden">
            {note.content}
          </pre>
        )}
      </div>

      <div className="my-3 border-t border-gray-100"></div>

      <div className="flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <div
            key={tag}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center max-w-full border border-transparent hover:border-blue-200 transition-colors"
          >
            <span className="truncate">{tag}</span>
            {!isEditing && (
              <button
                onClick={() =>
                  dispatch(
                    removeTagFromNote({
                      noteId: note.id,
                      tag,
                    })
                  )
                }
                className="ml-1 text-gray-500 hover:text-blue-700 flex-shrink-0"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <button
          onClick={handleSave}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full border border-green-600 transition-colors"
        >
          Save Changes
        </button>
      )}
    </div>
  );
}
