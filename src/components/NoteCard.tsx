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
    if (e.key === 'Enter' && !e.shiftKey) {
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
      role="note"
      onDoubleClick={() => setEditing(true)}
      onBlur={() => setEditing(false)}
      className="break-inside-avoid flex flex-col wrap-anywhere bg-primary dark:bg-pink-800 p-2 rounded-sm shadow-[1px_1px_3px_#fa4160] group mb-2"
    >
      {editing ? (
        <textarea
          autoFocus
          defaultValue={content}
          onChange={handleChange}
          onKeyDown={handleUpdate}
          className="field-sizing-content resize-none w-full flex-1 outline-none rounded-sm border border-gray-500"
        />
      ) : (
        <span className="flex-1 wrap-anywhere whitespace-pre-line">{content}</span>
      )}
      <button
        className="invisible group-hover:visible self-end opacity-50 transition-opacity hover:opacity-100"
        title="Delete"
        onClick={() => deleteNote(id)}
      >
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
}
