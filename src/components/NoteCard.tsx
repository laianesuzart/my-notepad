import { useState } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useNoteContext } from 'hooks/NoteContext';
import { Note } from 'types/Note';

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  const [editing, setEditing] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>('');
  const { deleteNote, updateNote } = useNoteContext();
  const { id, content } = note;

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewContent(e.target.value);
  }

  function handleUpdate(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      const updatedNote = {
        id,
        content: newContent,
      };

      updateNote(updatedNote);
      setEditing(false);
    }

    if (e.key === 'Escape') {
      setEditing(false);
    }
  }

  return (
    <div
      className="flex flex-col items-center bg-primary size-36 p-1 overflow-y-auto rounded-sm shadow-[1px_1px_3px_#fa4160] group"
      onDoubleClick={() => setEditing(true)}
    >
      {editing ? (
        <textarea
          autoFocus
          defaultValue={content}
          onChange={handleChange}
          onKeyDown={handleUpdate}
          className="size-[90%] outline-none rounded-sm border border-gray-500"
        />
      ) : (
        <span className="flex-1 break-all">{content}</span>
      )}
      <button
        className="hidden group-hover:block self-end opacity-50 transition-opacity hover:opacity-100"
        title="Delete"
        onClick={() => deleteNote(id)}
      >
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
}
