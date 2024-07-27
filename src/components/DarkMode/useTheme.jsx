import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");
    setTheme(saveTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "ligth" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
}

export default useTheme;
