import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: '3D Hero Playground',
    desc: 'Interactive Spline scene with smooth motion and responsive layout.',
    link: '#',
    repo: '#'
  },
  {
    title: 'Portfolio Engine',
    desc: 'Reusable components, theme system, and animated sections.',
    link: '#',
    repo: '#'
  },
  {
    title: 'Motion Toolkit',
    desc: 'Micro-interactions, staggered reveals, and dock navigation.',
    link: '#',
    repo: '#'
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="container mx-auto max-w-6xl px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl"
      >
        Selected Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/70 p-5 backdrop-blur-md transition hover:shadow-lg dark:border-white/10 dark:bg-white/5"
          >
            <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
              <Star className="h-3.5 w-3.5" /> Featured
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.desc}</p>
            <div className="mt-4 flex items-center gap-2">
              <a href={p.link} className="inline-flex items-center gap-1 rounded-full bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:opacity-90 dark:bg-white dark:text-neutral-900">
                Live <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href={p.repo} className="inline-flex items-center gap-1 rounded-full border border-neutral-200/70 bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-800 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-neutral-100">
                Code <Github className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-12 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 to-cyan-500/15 p-8 text-center backdrop-blur-md dark:border-blue-400/20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Have an idea?</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">I love building playful, interactive experiences. Let’s collaborate!</p>
        <a href="mailto:hello@example.com" className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
