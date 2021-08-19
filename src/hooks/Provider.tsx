import { ReactNode } from "react";
import { NoteProvider } from "./NoteContext";
import { TaskProvider } from "./TaskContext";
import { ThemeProvider } from "./ThemeContext";

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider>
      <TaskProvider>
        <NoteProvider>{children}</NoteProvider>
      </TaskProvider>
    </ThemeProvider>
  );
}
