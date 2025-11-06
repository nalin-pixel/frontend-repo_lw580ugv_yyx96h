import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignette that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 dark:from-black/40 dark:via-transparent dark:to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 text-center md:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 drop-shadow-sm dark:text-neutral-50 md:text-6xl"
        >
          Playful Portfolio for a Creative Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base text-neutral-700 dark:text-neutral-300 md:text-lg"
        >
          Smooth animations, a floating dock, and an interactive 3D hero. Built with React, Tailwind, Framer Motion, and Spline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Explore Projects
          </a>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 backdrop-blur-md transition hover:border-neutral-300 hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10"
          >
            See Skills
          </a>
        </motion.div>
      </div>
    </section>
  );
}
