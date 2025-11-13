import { useState } from 'react';
import { useTaskContext } from 'hooks/TaskContext';
import { useNoteContext } from 'hooks/NoteContext';
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { EntryBar } from 'components/EntryBar';
import { TaskCard } from 'components/TaskCard';
import { NoteCard } from 'components/NoteCard';

export function Home() {
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const { tasks, deleteCompletedTasks, deleteAllTasks } = useTaskContext();
  const { notes } = useNoteContext();

  return (
    <>
      <Header />
      <Menu setShowNotes={setShowNotes} />
      <h2 className="text-[#e94a35] text-4xl font-bold text-center pt-1 pb-2">
        {showNotes ? 'Notes' : 'To do'}
      </h2>
      <EntryBar isAddNotes={showNotes} />
      {!showNotes && (
        <>
          <div className="w-full max-w-2xl m-auto p-2 flex justify-between text-[0.5rem] sm:text-[0.6rem]">
            <p className="opacity-80">Double-click to edit, Enter to save or Esc to cancel</p>
            <div>
              <span
                className="px-1 opacity-80 transition-opacity hover:opacity-100"
                onClick={deleteCompletedTasks}
              >
                Clear completed
              </span>
              <span
                className="px-1 opacity-80 transition-opacity hover:opacity-100"
                onClick={deleteAllTasks}
              >
                Clear all
              </span>
            </div>
          </div>
          <ul className="w-[90%] max-w-2xl m-auto p-2 flex flex-col gap-2">
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskCard task={task} />
              </li>
            ))}
          </ul>
        </>
      )}
      {showNotes && (
        <ul className="max-w-4xl py-4 px-2 m-auto flex flex-wrap justify-center gap-1">
          {notes?.map((note) => (
            <li key={note.id}>
              <NoteCard note={note} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
