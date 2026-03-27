'use client';

import { FaLightbulb, FaShieldAlt, FaRocket, FaLayerGroup, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors text-sm mb-8 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Vault
        </Link>

        {/* Header */}
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent uppercase">
            Our Mission
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed italic border-l-2 border-emerald-500 pl-6">
            "To architect a unified digital ecosystem where management software meets hardware innovation."
          </p>
        </header>

        {/* Mission Pillars */}
        <div className="grid grid-cols-1 gap-12">
          
          <section className="flex flex-col md:flex-row gap-8 items-start group">
            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-emerald-500 group-hover:border-emerald-500/50 transition-colors">
              <FaLayerGroup size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Software Excellence</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Building robust, Postgres-backed management systems for Schools, Hospitals, and beyond. 
                We aim for 100% data integrity and seamless user experiences.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start group">
            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-blue-500 group-hover:border-blue-500/50 transition-colors">
              <FaRocket size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Hardware Innovation</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Integrating Electronics and IoT into everyday management. From automated 
                attendance sensors to smart inventory tracking, we bring code to life.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start group">
            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-purple-500 group-hover:border-purple-500/50 transition-colors">
              <FaShieldAlt size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">The Master Hub</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Centralizing all projects into one Flask-powered registry. This is not just a 
                portfolio; it&apos;s a developer&apos;s command center for multiple industries.
              </p>
            </div>
          </section>

        </div>

        {/* CTA Footer */}
        <div className="mt-24 p-12 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 text-center backdrop-blur-sm">
          <FaLightbulb className="mx-auto mb-6 text-yellow-500 animate-pulse" size={40} />
          <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
          <p className="text-zinc-500 mb-8 max-w-md mx-auto">
            My mission is to build better tools for everyone. If you have a project in mind, let&apos;s talk.
          </p>
          <a href="mailto:your@email.com" className="inline-block bg-white text-black px-10 py-4 rounded-xl font-black uppercase text-sm hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-105 shadow-xl">
            Get in Touch
          </a>
        </div>

      </div>
    </main>
  );
}