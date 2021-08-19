import { useState } from "react";
import { ThemeProvider } from "hooks/ThemeContext";
import { useTaskContext } from "hooks/TaskContext";
import { Header } from "components/Header";
import { Menu } from "components/Menu";
import { EntryBar } from "components/EntryBar";
import { TaskCard } from "components/TaskCard";
import styles from "styles/pages/Home.module.scss";

export function Home() {
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const { tasks } = useTaskContext();

  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Menu setShowNotes={setShowNotes} />
      <h2 className={styles.title}>{showNotes ? "Notes" : "To do"}</h2>
      <EntryBar isAddNotes={showNotes} />

      <ul className={styles.cardList}>
        {tasks?.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </>
  );
}