import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

export default function Portfolio({ education, projects, achievements }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.institution} className="group">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium">{e.institution}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{e.degree || e.qualification}</p>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">{e.duration}</span>
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {e.cgpa ? `CGPA: ${e.cgpa}` : e.percentage ? `Percentage: ${e.percentage}%` : null}
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li key={a.title} className="flex items-center justify-between gap-3">
                  <span className="text-sm">{a.title}</span>
                  {a.link && (
                    <a href={a.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300 hover:underline">
                      View <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <Card>
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
            <ul className="space-y-6">
              {projects.map((p) => (
                <li key={p.name}>
                  <div className="font-medium">{p.name}</div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    {p.description.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-amber-500/10" />
            <div className="relative">
              <h3 className="text-xl font-semibold mb-2">Open to Opportunities</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Actively looking for internships and projects in AI/ML, full‑stack, and research. Let’s build something ambitious.
              </p>
              <a
                href="mailto:anujprasad.nitjsr@gmail.com?subject=Let%E2%80%99s%20work%20together&body=Hi%20Anuj%2C%20I%27d%20love%20to%20chat%20about..."
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 shadow hover:opacity-90 transition"
              >
                Get in touch
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
