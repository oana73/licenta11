"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon,FiSun  } from "react-icons/fi";
import { LuSunDim } from "react-icons/lu";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme)
  useEffect(() => {
      setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <button
      className={`dark: text-neutral-500 hover:text-pink-600`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <FiMoon  /> : <FiSun   />}
    </button>
  );
}