import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";
export type ThemeColor = "blue-theme" | "green-theme" | "orange-theme" | 'rose-theme' | 'violet-theme' | 'sky-theme';

const THEME_MODE_KEY = "theme-mode";
const THEME_COLOR_KEY = "theme-color";

export const useTheme = () => {
    const themeOptions = [
        { label: "Blue", value: "blue-theme" },
        { label: "Green", value: "green-theme" },
        { label: "Orange", value: "orange-theme" },
        { label: 'Rose', value: 'rose-theme'},
        { label: 'Violet', value: 'violet-theme'},
        { label: 'Sky', value: 'sky-theme'}
    ];

    const getSystemDark = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const getInitialMode = (): ThemeMode => {
        const saved = localStorage.getItem(THEME_MODE_KEY);
        if (saved === "light" || saved === "dark") return saved;
        return getSystemDark() ? "dark" : "light";
    };

    const getInitialColor = (): ThemeColor => {
        return (localStorage.getItem(THEME_COLOR_KEY) as ThemeColor) || "blue-theme";
    };

    const [mode, setMode] = useState<ThemeMode>(getInitialMode);
    const [color, setColor] = useState<ThemeColor>(getInitialColor);

    const toggleMode = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

    const changeColor = (value: ThemeColor) => setColor(value);

    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle("dark", mode === "dark");
        localStorage.setItem(THEME_MODE_KEY, mode);

        root.classList.remove("blue-theme", "green-theme", "orange-theme", 'rose-theme', 'violet-theme', 'sky-theme');
        root.classList.add(color);
        localStorage.setItem(THEME_COLOR_KEY, color);
    }, [mode, color]);

    return {
        mode,
        color,
        toggleMode,
        changeColor,
        themeOptions,
    };
};

