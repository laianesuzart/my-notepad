import { useThemeContext } from "hooks/ThemeContext";
import { BiSun, BiMoon } from "react-icons/bi";
import styles from "styles/components/Header.module.scss";

export function Header() {
  const { currentTheme, changeTheme } = useThemeContext();

  return (
    <header className={styles.headerContainer}>
      <h1>My Notepad</h1>
      <div>
        <BiSun
          style={{
            color: currentTheme === "dark" ? "gray" : "rgb(241, 183, 21)",
          }}
          onClick={() => changeTheme("light")}
        />
        <BiMoon
          style={{
            color: currentTheme === "light" ? "gray" : "rgb(97, 16, 190)",
          }}
          onClick={() => changeTheme("dark")}
        />
      </div>
    </header>
  );
}
