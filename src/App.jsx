import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SkillsGrid from './components/SkillsGrid.jsx';
import Portfolio from './components/Portfolio.jsx';

const data = {
  name: 'Anuj Prasad',
  profiles: {
    linkedin: 'https://www.linkedin.com/in/anuj-prasad/',
    github: 'https://github.com/Anonified',
    twitter: 'https://x.com/rneuralnetwork',
    deepml: 'https://www.deep-ml.com/profile/rC483qgqpFhfS273A6iakmQP4bJ3',
  },
  education: [
    {
      institution: 'National Institute of Technology, Jamshedpur',
      duration: 'Aug 2023 – Present',
      degree: 'Bachelors in Computer Science and Engineering',
      cgpa: 7.98,
    },
    {
      institution: 'D.A.V. Public School, Bistupur, Jamshedpur',
      duration: 'Mar 2022 – Apr 2023',
      qualification: 'Class 12th CBSE - PCMC',
      percentage: 92.8,
    },
    {
      institution: 'D.A.V. Public School, Bistupur, Jamshedpur',
      duration: 'Mar 2020 – Apr 2021',
      qualification: 'Class 10th CBSE',
      percentage: 94.3,
    },
  ],
  technical_skills: {
    programming_languages: ['Python', 'C++', 'Java', 'JavaScript'],
    ai_ml_frameworks_libraries: [
      'PyTorch',
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'OpenCV',
      'LangChain',
      'TensorBoard',
    ],
    web_and_tools: [
      'React.js',
      'Next.js',
      'Tailwind',
      'FastAPI',
      'Inngest',
      'Modal',
      'Git',
      'GitHub',
    ],
    databases: ['MongoDB', 'MySQL'],
    specialized_areas: [
      'Deep Learning',
      'Retrieval-Augmented Generation (RAG)',
      'Model Training & Experiment Tracking',
    ],
  },
  projects: [
    {
      name: 'DNA Variant Predictor (Deep Learning for Genomics)',
      description: [
        'Developed an AI-powered platform to predict the pathogenicity of DNA mutations (SNVs) using the state-of-the-art Evo2 model, enabling real-time variant effect analysis.',
        'Integrated genomic datasets (UCSC, NCBI ClinVar) for chromosome browsing, gene search (e.g., BRCA1), and mutation classification.',
        'Built an interactive Next.js + React frontend to visualize genome assemblies, input SNVs, and compare Evo2 predictions with ClinVar benchmarks.',
      ],
    },
    {
      name: 'AI Music Generator SaaS (Text-to-Music & Lyrics)',
      description: [
        'Built a full-stack SaaS product for generating original music from text prompts, custom lyrics, and style descriptions using ACE-Step and Qwen2-7B.',
        'Architected scalable serverless GPU inference with Modal and implemented background task queues (Inngest) to handle concurrent music generation requests.',
        'Integrated AI-thumbnail generation (Stable Diffusion SDXL-turbo) and deployed a Next.js + Tailwind + Shadcn UI frontend with a community music feed and personal dashboards.',
      ],
    },
  ],
  certifications_achievements: [
    {
      title: 'Currently Ranked 260th on Deep-ML',
      link: 'https://www.deep-ml.com/profile/rC483qgqpFhfS273A6iakmQP4bJ3',
    },
    {
      title: 'Stanford Online - Supervised Machine Learning',
      link: 'https://www.coursera.org/account/accomplishments/records/XIO6LSCH1OKE',
    },
    {
      title: 'Databricks - GenAI Fundamentals',
      link: 'https://credentials.databricks.com/2e7cd941-4e38-480e-b5c2-a6c5eb5e01b5',
    },
  ],
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Navbar name={data.name} profiles={data.profiles} />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero name={data.name} profiles={data.profiles} />
        <SkillsGrid skills={data.technical_skills} />
        <Portfolio
          education={data.education}
          projects={data.projects}
          achievements={data.certifications_achievements}
        />
      </main>
      <footer className="py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} {data.name}. Built with love, React, and a splash of 3D.
      </footer>
    </div>
  );
}
