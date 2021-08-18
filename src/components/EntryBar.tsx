import React, { useState } from "react";
import styles from "styles/components/EntryBar.module.scss";

interface EntryBarProps {
  isAddNotes: boolean;
}

export function EntryBar({ isAddNotes }: EntryBarProps) {
  const [inputValue, setInputValue] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleAdd(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (isAddNotes) {
        console.log("nota:", inputValue);
      } else {
        console.log("todo:", inputValue);
      }
      setInputValue("");
    }
  }

  return (
    <input
      value={inputValue}
      type="text"
      placeholder="Type and press Enter to add"
      onChange={handleChange}
      onKeyDown={handleAdd}
      className={styles.inputBar}
    />
  );
}
