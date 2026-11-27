'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack3D from '@/components/TechStack3D';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack3D />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
