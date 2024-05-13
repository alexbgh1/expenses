"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LightbulbONIcon, LightbulbOFFIcon } from "@/icons/theme";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => setMounted(true), []);
  return (
    <>
      <button
        className="flex justify-center items-center mt-1 w-8 h-8 rounded-full transition-all ease-in-out duration-300
        bg-blue-500 hover:bg-blue-600
         dark:bg-blue-950 dark:hover:bg-blue-900"
        onClick={() => handleTheme()}
      >
        {mounted ? <ThemeIcon /> : <ThemeSkeleton />}
      </button>
    </>
  );
};

const ThemeIcon = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) null;

  const { resolvedTheme } = useTheme();

  return (
    <>
      {resolvedTheme === "dark" ? (
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

const ThemeSkeleton = () => {
  return (
    <>
      <span className="sr-only">Switch to light mode</span>
      <LightbulbOFFIcon className="w-4 h-4 fill-zinc-100 dark:fill-zinc-300" />
    </>
  );
};

export default ThemeSwitch;
