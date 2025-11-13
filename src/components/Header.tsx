import { useThemeContext } from 'hooks/ThemeContext';
import { BiSun, BiMoon } from 'react-icons/bi';

export function Header() {
  const { currentTheme, changeTheme } = useThemeContext();

  return (
    <header className="flex items-center justify-between py-2 px-4 shadow-[0_0_2px_var(--color-secondary)]">
      <h1 className="text-primary font-title text-[2rem] font-bold">My Notepad</h1>
      <div className="text-2xl">
        <BiSun
          style={{
            color: currentTheme === 'dark' ? 'gray' : 'rgb(241, 183, 21)',
          }}
          onClick={() => changeTheme('light')}
        />
        <BiMoon
          style={{
            color: currentTheme === 'light' ? 'gray' : 'rgb(97, 16, 190)',
          }}
          onClick={() => changeTheme('dark')}
        />
      </div>
    </header>
  );
}
