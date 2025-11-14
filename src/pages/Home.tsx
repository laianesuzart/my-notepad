import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { useTaskContext } from 'hooks/TaskContext';
import { useNoteContext } from 'hooks/NoteContext';
import { Header } from 'components/Header';
import { EntryBar } from 'components/EntryBar';
import { TaskCard } from 'components/TaskCard';
import { NoteCard } from 'components/NoteCard';

export function Home() {
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const { tasks, setTasks, deleteCompletedTasks, deleteAllTasks } = useTaskContext();
  const { notes } = useNoteContext();

  const [notesContainer] = useAutoAnimate();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over?.id);
      const orderedTasks = arrayMove(tasks, oldIndex, newIndex);
      setTasks(orderedTasks);
    }
  }

  return (
    <>
      <Header />
      <nav className="text-center">
        <button
          className={`pt-1 px-2 border-b opacity-60 outline-none hover:opacity-100 focus:opacity-100 transition-colors ${
            showNotes ? 'border-b-transparent' : 'border-b-secondary opacity-100'
          }`}
          onClick={() => setShowNotes(false)}
        >
          to do
        </button>
        <button
          className={`pt-1 px-2 border-b opacity-60 outline-none hover:opacity-100 focus:opacity-100 transition-colors ${
            showNotes ? 'border-b-secondary opacity-100' : 'border-b-transparent'
          }`}
          onClick={() => setShowNotes(true)}
        >
          notes
        </button>
      </nav>
      <main>
        <h2 className="text-[#e94a35] text-4xl font-bold text-center py-2">
          {showNotes ? 'Notes' : 'To do'}
        </h2>
        <EntryBar isAddNotes={showNotes} />
        {!showNotes && (
          <>
            <div className="w-full max-w-2xl m-auto p-2 flex justify-between text-[0.5rem] sm:text-[0.6rem]">
              <p className="opacity-80">Double-click to edit, Enter to save or Esc to cancel</p>
              <div>
                <button
                  className="px-1 opacity-80 transition-opacity hover:opacity-100"
                  onClick={deleteCompletedTasks}
                >
                  Clear completed
                </button>
                <button
                  className="px-1 opacity-80 transition-opacity hover:opacity-100"
                  onClick={deleteAllTasks}
                >
                  Clear all
                </button>
              </div>
            </div>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                <ul className="w-[90%] max-w-2xl m-auto p-2 flex flex-col gap-2">
                  {tasks.map((task) => (
                    <li key={task.id}>
                      <TaskCard task={task} />
                    </li>
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          </>
        )}
        {showNotes && (
          <ul
            ref={notesContainer}
            className="max-w-4xl py-4 px-2 m-auto sm:columns-2 md:columns-3 gap-2"
          >
            {notes?.map((note) => (
              <li key={note.id}>
                <NoteCard note={note} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
