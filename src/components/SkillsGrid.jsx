import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code, Palette, Cpu } from 'lucide-react';
import { profile } from '../data/profile';

const iconMap = {
  Frontend: <Code className="h-5 w-5" />,
  Backend: <Cpu className="h-5 w-5" />,
  Design: <Palette className="h-5 w-5" />,
  DevOps: <Rocket className="h-5 w-5" />,
};

export default function SkillsGrid() {
  const skills = profile.skills;
  return (
    <section id="skills" className="container mx-auto max-w-6xl px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl"
      >
        Skills Snapshot
      </motion.h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="rounded-2xl border border-neutral-200/70 bg-white/70 p-5 shadow-sm backdrop-blur-md transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/90 to-cyan-500/90 text-white">
              {iconMap[card.title] ?? <Code className="h-5 w-5" />}
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{card.title}</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
              {card.items.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
