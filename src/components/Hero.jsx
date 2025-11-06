import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ name, profiles }) {
  return (
    <section id="home" className="relative grid lg:grid-cols-2 items-center gap-8 py-16 sm:py-24">
      <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] rounded-3xl overflow-hidden ring-1 ring-slate-200/60 dark:ring-slate-800/60">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-950 opacity-60" />
      </div>

      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
        >
          {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-prose"
        >
          AI/ML Engineer and Full‑Stack Developer crafting intelligent, scalable products. I blend deep learning with clean product design to make ideas shippable.
        </motion.p>

        <div className="flex flex-wrap gap-3">
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            href={profiles.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-2.5 shadow hover:opacity-90 transition"
          >
            <Rocket className="h-4 w-4" /> Hire Me
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            href={profiles.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-5 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            View GitHub
          </motion.a>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6"
        >
          {['Deep Learning', 'RAG', 'Genomics AI', 'FastAPI', 'React', 'MLOps'].map((chip) => (
            <motion.li
              key={chip}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              className="text-sm rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-slate-600 dark:text-slate-300"
            >
              {chip}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
