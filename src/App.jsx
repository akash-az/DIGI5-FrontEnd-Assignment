// App.jsx
import { Provider } from "react-redux";
import store from "./app/store";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import TagFilter from "./components/TagFilter";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
            📝 Notes App
          </h1>

          {/* Filter Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <TagFilter />
          </div>

          {/* Note Input Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <NoteForm />
          </div>

          {/* Notes List */}
          <NoteList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
