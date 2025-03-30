// NoteItem.jsx
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/notes/notesSlice";

export default function NoteItem({ note }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            {note.title}
          </h3>
          <p className="text-slate-600 mb-4 whitespace-pre-wrap">
            {note.content}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-end gap-2 border-t pt-3">
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              className="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
