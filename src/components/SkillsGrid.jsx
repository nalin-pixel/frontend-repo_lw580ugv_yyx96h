import React from 'react';
import { motion } from 'framer-motion';

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
    {children}
  </span>
);

export default function SkillsGrid({ skills }) {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Skills</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">A focused stack for fast iteration</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, list]) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur"
          >
            <h3 className="capitalize font-semibold mb-4 text-slate-700 dark:text-slate-200">
              {group.replaceAll('_', ' ')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {list.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
