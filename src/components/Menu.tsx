import { Dispatch } from "react";
import styles from "styles/components/Menu.module.scss";

interface MenuProps {
  setShowNotes: Dispatch<boolean>;
}

export function Menu({ setShowNotes }: MenuProps) {
  return (
    <nav className={styles.menuContainer}>
      <button onClick={() => setShowNotes(false)}>to do</button>
      <button onClick={() => setShowNotes(true)}>notes</button>
    </nav>
  );
}
