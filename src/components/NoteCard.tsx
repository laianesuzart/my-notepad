import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useNoteContext } from "hooks/NoteContext";
import { Note } from "types/Note";
import styles from "styles/components/NoteCard.module.scss";

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  const [editing, setEditing] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>("");
  const { deleteNote, updateNote } = useNoteContext();
  const { id, content } = note;

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewContent(e.target.value);
  }

  function handleUpdate(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      const updatedNote = {
        id,
        content: newContent,
      };

      updateNote(updatedNote);
      setEditing(false);
    }

    if (e.key === "Escape") {
      setEditing(false);
    }
  }

  return (
    <div
      className={styles.cardContainer}
      onDoubleClick={() => setEditing(true)}
    >
      {editing ? (
        <textarea
          autoFocus
          defaultValue={content}
          onChange={handleChange}
          onKeyDown={handleUpdate}
        />
      ) : (
        <span>{content}</span>
      )}
      <button title="Delete" onClick={() => deleteNote(id)}>
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
}
