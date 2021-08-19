import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Task } from "types/Task";
import { useTaskContext } from "hooks/TaskContext";
import styles from "styles/components/TaskCard.module.scss";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const [editing, setEditing] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>("");
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
    if (e.key === "Enter") {
      const updatedTask = {
        id,
        content: newContent,
        isCompleted,
      };

      updateTask(updatedTask);
      setEditing(false);
    }

    if (e.key === "Escape") {
      setEditing(false);
    }
  }

  return (
    <div className={styles.cardContainer}>
      <label htmlFor={`task${id}`} className={styles.checkbox}>
        <input
          type="checkbox"
          name="taskStatus"
          id={`task${id}`}
          checked={isCompleted}
          onChange={updateStatus}
        />
        <span></span>
      </label>
      {editing ? (
        <input
          type="text"
          autoFocus
          defaultValue={content}
          onChange={handleChange}
          onKeyDown={handleUpdateContent}
        />
      ) : (
        <span
          onDoubleClick={() => setEditing(true)}
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            opacity: isCompleted ? "0.4" : "1",
          }}
        >
          {content}
        </span>
      )}
      <button title="Delete" onClick={() => deleteTask(id)}>
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
}
