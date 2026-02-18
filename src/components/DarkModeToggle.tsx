import { Moon, Sun } from "lucide-react";
import { useState } from "react";

type Props = {
  toggleTheme: () => void;
  dark: boolean;
};

export default function DarkModeToggle({ toggleTheme, dark }: Props) {

  return (
    <button onClick={toggleTheme}>
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}
