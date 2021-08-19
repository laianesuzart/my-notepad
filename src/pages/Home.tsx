import { useState } from "react";
import { ThemeProvider } from "hooks/ThemeContext";
import { useTaskContext } from "hooks/TaskContext";
import { useNoteContext } from "hooks/NoteContext";
import { Header } from "components/Header";
import { Menu } from "components/Menu";
import { EntryBar } from "components/EntryBar";
import { TaskCard } from "components/TaskCard";
import styles from "styles/pages/Home.module.scss";
import { NoteCard } from "components/NoteCard";

export function Home() {
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const { tasks, deleteCompletedTasks, deleteAllTasks } = useTaskContext();
  const { notes } = useNoteContext();

  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Menu setShowNotes={setShowNotes} />
      <h2 className={styles.title}>{showNotes ? "Notes" : "To do"}</h2>
      <EntryBar isAddNotes={showNotes} />
      {!showNotes && (
        <>
          <div className={styles.tasksBar}>
            <p>Double-click to edit, Enter to save or Esc to cancel</p>
            <div>
              <span onClick={deleteCompletedTasks}>Clear completed</span>
              <span onClick={deleteAllTasks}>Clear all</span>
            </div>
          </div>
          <ul className={styles.cardList}>
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskCard task={task} />
              </li>
            ))}
          </ul>
        </>
      )}

      {showNotes && (
        <ul>
          {notes?.map((note) => (
            <li key={note.id}>
              <NoteCard note={note} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
