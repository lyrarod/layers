"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {resolvedTheme === "dark" ? (
        <SunIcon
          onClick={() => setTheme("light")}
          className="h-5 w-5 cursor-default md:h-6 md:w-6 md:cursor-pointer"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme("dark")}
          className="h-5 w-5 cursor-default md:h-6 md:w-6 md:cursor-pointer"
        />
      )}
    </>
  );
};
