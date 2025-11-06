import React from 'react';
import { motion } from 'framer-motion';
import { Home, Sparkles, FolderKanban, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const items = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#skills', label: 'Skills', icon: Sparkles },
  { href: '#projects', label: 'Projects', icon: FolderKanban },
  { href: `mailto:${profile.email}`, label: 'Email', icon: Mail },
];

export default function FloatingDock() {
  return (
    <div className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-1.5 rounded-2xl border border-neutral-200/70 bg-white/80 p-1.5 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/60"
      >
        {items.map(({ href, label, icon: Icon }) => (
          <motion.a
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            key={label}
            href={href}
            className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-white dark:text-neutral-200 dark:hover:bg-white/10"
          >
            <Icon className="h-5 w-5" />
            <span className="hidden sm:inline">{label}</span>
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
}
