import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Task } from "types/Task";

interface TaskContextData {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
  deleteAllTasks: () => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const taskList = localStorage.getItem("tasks");
    if (taskList) {
      return JSON.parse(taskList);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task: Task) {
    setTasks([task, ...tasks]);
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  }

  function updateTask(task: Task) {
    const oldTask = tasks.findIndex((item) => item.id === task.id);
    const taskList = [
      ...tasks.slice(0, oldTask),
      task,
      ...tasks.slice(oldTask + 1),
    ];

    setTasks(taskList);
  }

  function deleteAllTasks() {
    setTasks([]);
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, updateTask, deleteAllTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTaskContext = () => useContext(TaskContext);
