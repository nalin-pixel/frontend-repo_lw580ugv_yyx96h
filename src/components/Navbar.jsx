import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Sun, Moon, Link as LinkIcon } from 'lucide-react';

export default function Navbar({ name, profiles }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const iconClass = 'h-5 w-5';

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900 dark:text-white">{name}</a>
        <div className="flex items-center gap-3">
          <a href={profiles.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <Github className={iconClass} />
          </a>
          <a href={profiles.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <Linkedin className={iconClass} />
          </a>
          <a href={profiles.twitter} target="_blank" rel="noreferrer" aria-label="Twitter/X" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <Twitter className={iconClass} />
          </a>
          <a href={profiles.deepml} target="_blank" rel="noreferrer" aria-label="Deep-ML" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <LinkIcon className={iconClass} />
          </a>
          <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="ml-2 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className={iconClass} /> : <Moon className={iconClass} />}
          </button>
        </div>
      </div>
    </header>
  );
}
