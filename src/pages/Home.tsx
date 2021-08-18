import { useState } from "react";
import { ThemeProvider } from "hooks/ThemeContext";
import { TaskProvider } from "hooks/TaskContext";
import { Header } from "components/Header";
import { Menu } from "components/Menu";
import { EntryBar } from "components/EntryBar";
import styles from "styles/pages/Home.module.scss";

export function Home() {
  const [showNotes, setShowNotes] = useState<boolean>(false);

  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Menu setShowNotes={setShowNotes} />
      <h2 className={styles.title}>{showNotes ? "Notes" : "To do"}</h2>
      <TaskProvider>
        <EntryBar isAddNotes={showNotes} />
      </TaskProvider>
    </>
  );
}
