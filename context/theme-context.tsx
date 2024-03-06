"use client";
import exp from "constants";
import React, { useEffect, useState, createContext } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  toogleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
};
export default function ThemeProviderContext(children: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    const locatTheme = window.localStorage.getItem("theme") as Theme | null;
    if (locatTheme) {
      setTheme(locatTheme);
      if (locatTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toogleTheme,
      }}
    >
      {children.children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProviderContext");
  }
  return context;
}
