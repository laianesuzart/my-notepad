import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface ThemeContextData {
  currentTheme: 'light' | 'dark';
  changeTheme: (theme: 'light' | 'dark') => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(() => {
    const theme = localStorage.getItem('theme');
    if (theme) return JSON.parse(theme);
    return globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  function changeTheme(theme: 'light' | 'dark') {
    if (theme !== currentTheme) {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem('theme', theme);
      setCurrentTheme(theme);
    }
  }

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme;
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
