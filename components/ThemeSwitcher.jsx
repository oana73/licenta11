"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, SunDim } from "lucide-react";
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
        className={`dark: text-neutral-500 hover:text-cyan-600`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
    {theme === "light" ? <Moon className="w-6 h-5" /> : <Sun className="w-6 h-5"/>}
    </button>
    );
}