import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsGrid from './components/SkillsGrid';
import Portfolio from './components/Portfolio';
import FloatingDock from './components/FloatingDock';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-50">
      {/* Minimal top info bar with theme toggle; main nav is the floating dock */}
      <Navbar />

      <main>
        <Hero />
        <SkillsGrid />
        <Portfolio />
      </main>

      <FloatingDock />
    </div>
  );
}
