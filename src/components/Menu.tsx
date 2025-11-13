import { Dispatch } from 'react';

interface MenuProps {
  setShowNotes: Dispatch<boolean>;
}

export function Menu({ setShowNotes }: MenuProps) {
  return (
    <nav className="text-center">
      <button
        className="pt-1 px-2 border-b border-b-transparent opacity-60 outline-none hover:opacity-100 hover:border-b-secondary focus:opacity-100 focus:border-b-secondary transition-colors"
        onClick={() => setShowNotes(false)}
      >
        to do
      </button>
      <button
        className="pt-1 px-2 border-b border-b-transparent opacity-60 outline-none hover:opacity-100 hover:border-b-secondary focus:opacity-100 focus:border-b-secondary transition-colors"
        onClick={() => setShowNotes(true)}
      >
        notes
      </button>
    </nav>
  );
}
