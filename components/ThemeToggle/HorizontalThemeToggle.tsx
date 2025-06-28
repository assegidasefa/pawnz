// components/VerticalThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";
import { Separator } from "../ui/separator";

export function HorizontalThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <div className="flex flex-row gap-y-2">
      <div
        className="w-20 gap-y-2 rounded-sm bg-gray-100 dark:bg-neutral-800 p-[2px] flex flex-row justify-between items-center cursor-pointer transition-all"
        onClick={toggleTheme}
      >
        <div
          className={clsx(
            "p-[6px] flex items-center justify-center rounded-sm transition-colors",
            !isDark ? "bg-white shadow" : "opacity-50"
          )}
        >
          <Sun className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </div>
        <div
          className={clsx(
            "p-[6px] flex items-center justify-center rounded-sm transition-colors",
            isDark ? "bg-[#141415] shadow" : "opacity-50"
          )}
        >
          <Moon className="w-6 h-6 text-gray-700 dark:text-[#ACADAE]" />
        </div>
      </div>
    </div>
  );
}
