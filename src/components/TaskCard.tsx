import {RiDeleteBin5Fill} from "react-icons/ri"
import { Task } from "types/Task";
import styles from "styles/components/TaskCard.module.scss";
import { useTaskContext } from "hooks/TaskContext";

interface TaskCardProps {
    task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
    const {deleteTask} = useTaskContext()

  return (
    <div className={styles.cardContainer}>
      <input type="checkbox" name="taskStatus" id="taskStatus" checked={task.isCompleted}/>
      <span>{task.content}</span>
      <button title="Delete" onClick={() => deleteTask(task.id)}><RiDeleteBin5Fill/></button>
    </div>
  );
}
