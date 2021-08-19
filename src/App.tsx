import { useState } from "react";
import { TaskProvider } from "hooks/TaskContext";
import { NoteProvider } from "hooks/NoteContext";
import { Home } from "pages/Home";
import "styles/global.scss";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <TaskProvider>
          <NoteProvider>
            <Home />
          </NoteProvider>
        </TaskProvider>
      )}
    </>
  );
}

export default App;
