import { useEffect, useState } from "react";
import "./darkmode.css";
// import useTheme from "./useTheme";

function DarkMode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");
    setTheme(saveTheme);
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`${theme}-mode`}>
      <h1>Light Mode</h1>
      <button className={`darkLight-${theme}`} onClick={handleToggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

// function DarkMode() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className={`${theme}-mode`}>
//       <h1>{theme}</h1>
//       <button onClick={toggleTheme}>Change Theme</button>
//     </div>
//   );
// }

export default DarkMode;
