"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, SunDim } from "lucide-react";
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
        className={`dark: text-neutral-600`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
    {theme === "light" ? <Moon /> : <SunDim />}
    </button>
    );
}