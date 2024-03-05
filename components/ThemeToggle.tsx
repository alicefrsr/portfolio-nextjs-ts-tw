'use client';

import React, { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <button
      className='outline-focusColor fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] p-[0.8rem] bg-opacity-70 backdrop-blur-[0.5rem] border dark:border-white border-opacity-50 shadow-md rounded-full flex items-center justify-center focus:scale-110 hover:scale-[1.15] hover:shadow-md hover:border-opacity-100 hover:shadow-gray-400 active:scale-105 transition-all dark:bg-gray-950 dark:shadow-none'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsMoon size={28} /> : <BsSun size={28} />}
    </button>
  );
}
