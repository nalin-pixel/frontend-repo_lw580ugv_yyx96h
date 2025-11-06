import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero({ name, profiles }) {
  return (
    <section id="home" className="relative grid lg:grid-cols-2 items-center gap-8 py-16 sm:py-24">
      <div className="relative order-1 lg:order-none h-[400px] sm:h-[520px] lg:h-[640px] rounded-3xl overflow-hidden ring-1 ring-slate-200/60 dark:ring-slate-800/60">
        <Spline
          scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-950 opacity-60" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-6"
      >
        <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
          {name}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-prose"
        >
          AI/ML Engineer and Full‑Stack Developer crafting intelligent, scalable products. I blend deep learning with clean product design to make ideas shippable.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={profiles.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition"
          >
            <Rocket className="h-4 w-4" /> Hire Me
          </motion.a>
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={profiles.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 backdrop-blur px-6 py-3 hover:bg-white/80 dark:hover:bg-slate-800/70 transition"
          >
            View GitHub
          </motion.a>
        </motion.div>

        <motion.ul
          variants={item}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4"
        >
          {['Deep Learning', 'RAG', 'Genomics AI', 'FastAPI', 'React', 'MLOps'].map((chip) => (
            <motion.li
              key={chip}
              whileHover={{ y: -2 }}
              className="text-sm rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-slate-600 dark:text-slate-300"
            >
              {chip}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
