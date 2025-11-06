import React from 'react';
import { Home, Sparkles, FolderKanban, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#skills', label: 'Skills', icon: Sparkles },
  { href: '#projects', label: 'Projects', icon: FolderKanban },
  { href: 'mailto:anujprasad.nitjsr@gmail.com', label: 'Contact', icon: Mail },
];

export default function FloatingDock() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
      <nav className="backdrop-blur bg-white/70 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/70 shadow-xl rounded-2xl px-2 sm:px-3 py-2 flex gap-1 sm:gap-2">
        {items.map(({ href, label, icon: Icon }) => (
          <motion.a
            key={label}
            href={href}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition-colors hover:bg-slate-100/80 dark:hover:bg-slate-800/70"
          >
            <Icon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            <span className="hidden md:inline text-sm text-slate-700 dark:text-slate-200">{label}</span>
          </motion.a>
        ))}
      </nav>
    </div>
  );
}
