import { ThemeProvider } from "hooks/ThemeContext";
import { Header } from "components/Header";

export function Home() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
