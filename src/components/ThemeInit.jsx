import { useEffect } from 'react';

// Ensures the correct theme class is applied on first mount
export default function ThemeInit() {
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = stored ? stored === 'dark' : prefersDark;
      document.documentElement.classList.toggle('dark', isDark);
    } catch (_) {
      // no-op
    }
  }, []);
  return null;
}
