import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TaskContextData {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const task_list = localStorage.getItem("tasks");
    if (task_list) {
      return JSON.parse(task_list);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task: Task) {
      setTasks([task, ...tasks]);
  }

  function deleteTask(id: string) {}

  function updateTask(task: Task) {}

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTaskContext = () => useContext(TaskContext);
