import { Note } from "types/Note";
import styles from "styles/components/NoteCard.module.scss";

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  const { id, content } = note;

  return <div className={styles.cardContainer}>
      <span>{content}</span>
      <button></button>
  </div>;
}
