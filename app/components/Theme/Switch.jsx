'use client'
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {Tooltip, Button, VisuallyHidden } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center">
      <div className="w-10 h-10 ">
        <VisuallyHidden>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            id="themeToggle"
          />
        </VisuallyHidden>
        <Tooltip showArrow={true}  offset={15} shadow="20px"  content="Change Theme">
        <label
          htmlFor="themeToggle"
          className={`rounded-lg bg-default-100 dark:bg-purple-600 hover:bg-default-200 flex items-center transition duration-500 justify-center cursor-pointer p-2`}
        >
          {theme === 'light' ? (
            <SunIcon className='text-xl'/>
          ) : (
            <MoonIcon className='text-xl '/>
          )}
        </label>
        </Tooltip>
      </div>
    
    </div>
  );
}
