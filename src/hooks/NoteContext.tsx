import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Note } from "types/Note";

interface NoteContextData {
  notes: Note[];
  addNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  updateNote: (note: Note) => void;
}

interface NoteProviderProps {
  children: ReactNode;
}

const NoteContext = createContext({} as NoteContextData);

export function NoteProvider({ children }: NoteProviderProps) {
  const [notes, setNotes] = useState<Note[]>(() => {
    const noteList = localStorage.getItem("notes");

    if (noteList) {
      return JSON.parse(noteList);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(note: Note) {
    setNotes([...notes, note]);
  }

  function deleteNote(id: string) {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
  }

  function updateNote(note: Note) {
    const oldNote = notes.findIndex((item) => item.id === note.id);
    const noteList = [
      ...notes.slice(0, oldNote),
      note,
      ...notes.slice(oldNote + 1),
    ];

    setNotes(noteList);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export const useNoteContext = () => useContext(NoteContext);
