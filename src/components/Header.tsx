import { useThemeContext } from 'hooks/ThemeContext';
import { ChangeEvent } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

export function Header() {
  const { currentTheme, changeTheme } = useThemeContext();

  const darkMode = currentTheme === 'dark';

  const onSwitchTheme = (e: ChangeEvent<HTMLInputElement>) => {
    changeTheme(e.target.checked ? 'dark' : 'light');
  };

  return (
    <header className="flex items-center justify-between py-2 px-4 shadow-[0_0_2px_var(--color-secondary)]">
      <h1 className="text-primary font-title text-[2rem] font-bold">My Notepad</h1>
      <label
        className="w-16 text-2xl shadow p-px rounded-full bg-gray-50 dark:bg-gray-300 cursor-pointer"
        aria-label="Switch theme"
      >
        <input type="checkbox" className=" hidden" checked={darkMode} onChange={onSwitchTheme} />
        <span
          className={`flex items-center justify-center bg-white dark:bg-gray-200 shadow-lg rounded-full size-8 transition-transform ${
            darkMode ? 'translate-x-[30px]' : ''
          }`}
        >
          {darkMode ? (
            <BiMoon className="text-purple-900" />
          ) : (
            <BiSun className="text-yellow-500" />
          )}
        </span>
      </label>
    </header>
  );
}
