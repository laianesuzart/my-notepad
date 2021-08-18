import { BiSun, BiMoon } from "react-icons/bi";
import styles from "styles/components/Header.module.scss";

interface HeaderProps {
  theme: string;
}

export function Header({ theme }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <h1>My Notepad</h1>
      <div>
        <BiSun
          style={{ color: theme === "dark" ? "gray" : "rgb(241, 183, 21)" }}
        />
        <BiMoon
          style={{ color: theme === "light" ? "gray" : "rgb(97, 16, 190)" }}
        />
      </div>
    </header>
  );
}
