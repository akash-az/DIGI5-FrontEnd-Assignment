const ClearStorageButton = () => {
  const handleClearStorage = () => {
    localStorage.removeItem("notesAppState");
    window.location.reload();
  };

  return (
    <button
      onClick={handleClearStorage}
      className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg 
                  shadow-lg hover:bg-red-600 transition-colors"
    >
      Clear All Data
    </button>
  );
};

export default ClearStorageButton;
