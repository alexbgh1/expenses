"use client";
import { useTheme } from "next-themes";
const SimpleSwitch = () => {
  const { setTheme } = useTheme();
  //TODO: Improve switch theme
  return (
    <>
      <button onClick={() => setTheme("dark")}>Switch Theme</button>
      <button onClick={() => setTheme("light")}>Switch Theme</button>
    </>
  );
};

export default SimpleSwitch;
