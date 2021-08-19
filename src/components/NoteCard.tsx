import { RiDeleteBin5Fill } from "react-icons/ri";
import { Note } from "types/Note";
import styles from "styles/components/NoteCard.module.scss";
import { useNoteContext } from "hooks/NoteContext";

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  const { deleteNote } = useNoteContext();
  const { id, content } = note;

  return (
    <div className={styles.cardContainer}>
      <span>{content}</span>
      <button title="Delete" onClick={() => deleteNote(id)}>
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
}
