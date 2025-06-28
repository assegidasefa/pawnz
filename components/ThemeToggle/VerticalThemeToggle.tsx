// components/VerticalThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";
import { Separator } from "../ui/separator";

export function VerticalThemeToggle() {
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
    <div className="flex flex-col gap-y-2">
      <div
        className="w-9 gap-y-2 rounded-xl bg-gray-100 dark:bg-neutral-800 p-[2px] flex flex-col justify-between items-center cursor-pointer transition-all"
        onClick={toggleTheme}
      >
        <div
          className={clsx(
            "p-[6px] flex items-center justify-center rounded-xl transition-colors",
            !isDark ? "bg-white shadow" : "opacity-50"
          )}
        >
          <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </div>
        <div
          className={clsx(
            "p-[6px] flex items-center justify-center rounded-xl transition-colors",
            isDark ? "bg-[#141415] shadow" : "opacity-50"
          )}
        >
          <Moon className="w-4 h-4 text-gray-700 dark:text-[#ACADAE]" />
        </div>
      </div>
      <div className="flex justify-center py-2">
        <Separator className="w-full mx-4" />
      </div>
    </div>
  );
}
