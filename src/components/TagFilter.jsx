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
        className={`px-3 py-1 rounded-full ${
          !selectedTag
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => dispatch(setFilterTag(tag))}
          className={`px-3 py-1 rounded-full ${
            tag === selectedTag
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
