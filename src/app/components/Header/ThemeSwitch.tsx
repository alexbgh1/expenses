"use client";
import { useTheme } from "next-themes";
import { LightbulbONIcon, LightbulbOFFIcon } from "@/app/icons/theme";
const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  //TODO: Improve switch theme
  return (
    <>
      <button
        className="flex justify-center items-center mt-1 w-8 h-8 rounded-full transition-all ease-in-out duration-300
        bg-blue-500 hover:bg-blue-600
         dark:bg-blue-950 dark:hover:bg-blue-900"
        onClick={() => handleTheme()}
      >
        <ThemeIcon />
      </button>
    </>
  );
};

const ThemeIcon = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <>
          <span className="sr-only">Switch to light mode</span>
          <LightbulbOFFIcon className="w-4 h-4 fill-yellow-300 dark:fill-white" />
        </>
      ) : (
        <>
          <span className="sr-only">Switch to dark mode</span>
          <LightbulbONIcon className="w-4 h-4 fill-yellow-300 dark:fill-blue-950" />
        </>
      )}
    </>
  );
};

export default ThemeSwitch;
