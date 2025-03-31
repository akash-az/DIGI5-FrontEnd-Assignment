import { useSelector, useDispatch } from "react-redux";
import { setFilterTag } from "../features/filters/filtersSlice";

export default function TagFilter() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const selectedTag = useSelector((state) => state.filters.selectedTag);

  const tags = [...new Set(notes.flatMap((note) => note.tags))];

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => dispatch(setFilterTag(null))}
        className={`px-3 py-1 rounded-full border transition-colors ${
          !selectedTag
            ? "bg-blue-500 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => dispatch(setFilterTag(tag))}
          className={`px-3 py-1 rounded-full border transition-colors ${
            tag === selectedTag
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
