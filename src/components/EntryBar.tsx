import React, { useState } from 'react';
import { useTaskContext } from 'hooks/TaskContext';
import { useNoteContext } from 'hooks/NoteContext';

interface EntryBarProps {
  isAddNotes: boolean;
}

export function EntryBar({ isAddNotes }: EntryBarProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const { addTask } = useTaskContext();
  const { addNote } = useNoteContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleAdd(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const date = new Date();
      const id = `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;

      if (isAddNotes) {
        const note = {
          id,
          content: inputValue,
        };
        addNote(note);
      } else {
        const task = {
          id,
          content: inputValue,
          isCompleted: false,
        };
        addTask(task);
      }
      setInputValue('');
    }
  }

  return (
    <input
      value={inputValue}
      type="text"
      placeholder="Type and press Enter to add"
      onChange={handleChange}
      onKeyDown={handleAdd}
      className="block m-auto py-2 px-4 w-[90%] max-w-2xl bg-gray-100 rounded-xs border border-gray-300 outline-none hover:border-secondary focus:border-secondary focus:bg-white transition-colors"
    />
  );
}
