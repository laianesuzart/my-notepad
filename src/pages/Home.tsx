import { useState } from "react";
import { ThemeProvider } from "hooks/ThemeContext";
import { Header } from "components/Header";
import styles from "styles/pages/Home.module.scss";
import { Menu } from "components/Menu";

export function Home() {
  const [showNotes, setShowNotes] = useState<boolean>(false);

  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Menu setShowNotes={setShowNotes} />
      <h2 className={styles.title}>{showNotes ? "Notes" : "To do"}</h2>
    </>
  );
}
