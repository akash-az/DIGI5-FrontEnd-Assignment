import { Provider } from "react-redux";
import store from "./app/store";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import TagFilter from "./components/TagFilter";
import ClearStorageButton from "./components/ClearStorageButton";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1
            className="text-4xl font-bold text-center text-slate-800 mb-8 
                        drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]"
          >
            Notes App
          </h1>

          <div
            className="backdrop-blur-sm bg-white/80 rounded-xl shadow-lg 
                        border border-white/20 p-6 mb-8"
          >
            <TagFilter />
          </div>

          <div
            className="backdrop-blur-sm bg-white/80 rounded-xl shadow-lg 
                        border border-white/20 p-6 mb-8"
          >
            <NoteForm />
          </div>

          {/* Notes List */}
          <div className="space-y-4">
            <NoteList />
          </div>
        </div>
      </div>
      <ClearStorageButton />
    </Provider>
  );
}

export default App;
