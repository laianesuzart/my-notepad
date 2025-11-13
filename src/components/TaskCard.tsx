import React, { useState } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { Task } from 'types/Task';
import { useTaskContext } from 'hooks/TaskContext';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const [editing, setEditing] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>('');
  const { updateTask, deleteTask } = useTaskContext();
  const { id, content, isCompleted } = task;

  function updateStatus() {
    const updatedTask = {
      id,
      content,
      isCompleted: !isCompleted,
    };

    updateTask(updatedTask);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewContent(e.target.value);
  }

  function handleUpdateContent(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const updatedTask = {
        id,
        content: newContent,
        isCompleted,
      };

      updateTask(updatedTask);
      setEditing(false);
    }

    if (e.key === 'Escape') {
      setEditing(false);
    }
  }

  return (
    <div className="flex items-center py-2 gap-2 group">
      <label htmlFor={`task${id}`} className="group/checkbox block leading-0 cursor-pointer">
        <input
          type="checkbox"
          name="taskStatus"
          id={`task${id}`}
          checked={isCompleted}
          onChange={updateStatus}
          className="hidden"
        />
        <span
          className={`size-5 rounded-full grid place-content-center transition-colors ${
            isCompleted ? 'bg-cyan-600' : 'bg-gray-100 group-hover/checkbox:bg-gray-200'
          }`}
        >
          <FaCheck className={`${isCompleted ? 'block' : 'hidden'} text-white text-xs`} />
        </span>
      </label>
      {editing ? (
        <input
          type="text"
          autoFocus
          defaultValue={content}
          onChange={handleChange}
          onKeyDown={handleUpdateContent}
          className="flex-1 py-1 bg-gray-100 border rounded-xs outline-none border-gray-300 hover:border-primary focus:border-primary focus:bg-white transition-colors"
        />
      ) : (
        <span
          onDoubleClick={() => setEditing(true)}
          className={`break-all flex-1 cursor-alias ${
            isCompleted ? 'opacity-40 line-through' : ''
          }`}
        >
          {content}
        </span>
      )}
      <button
        title="Delete"
        onClick={() => deleteTask(id)}
        className="hidden opacity-50 group-hover:block transition-opacity hover:opacity-100"
      >
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
}
