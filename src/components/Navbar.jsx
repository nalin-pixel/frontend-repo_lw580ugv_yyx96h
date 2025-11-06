import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center p-3">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/60">
        <Gamepad2 className="h-4 w-4 text-blue-600" />
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Interactive 3D Hero Active</span>
        <button
          onClick={toggleTheme}
          className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/60 bg-white/80 text-neutral-800 transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-neutral-100"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white hover:opacity-90 dark:bg-white dark:text-neutral-900">
          <Github className="h-4 w-4" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/60 bg-white/80 text-neutral-800 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-neutral-100">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href="mailto:hello@example.com" className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
          <Mail className="h-3.5 w-3.5" />
          <span>Say hi</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
