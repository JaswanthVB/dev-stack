'use client';

import Link from 'next/link';
import { FaArrowRight, FaCode, FaMicrochip, FaDatabase, FaBolt } from 'react-icons/fa';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-6">
            <FaDatabase className="text-blue-500" /> Distributed Architecture
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent uppercase">
            Project Vault
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore a curated collection of professional ecosystems spanning 
            <span className="text-white"> scalable web management</span> and 
            <span className="text-white"> hardware engineering</span>.
          </p>
        </header>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Web Management Card */}
          <div className="group relative p-10 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm">
            <div className="mb-8 w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <FaCode size={30} />
            </div>
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">
              Web <br /> <span className="text-blue-500">Management</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-10 text-sm">
              High-performance, Postgres-backed systems. Specializing in School ERPs, 
              Hospital records, and Restaurant POS architectures with Flask integration.
            </p>
            <Link 
              href="/management" 
              className="flex items-center justify-between group/btn w-full px-6 py-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-blue-400 font-bold hover:bg-blue-500 hover:text-white transition-all"
            >
              Enter Directory
              <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Electronics & IoT Card */}
          <div className="group relative p-10 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 backdrop-blur-sm">
            <div className="mb-8 w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
              <FaMicrochip size={30} />
            </div>
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">
              Electronics <br /> <span className="text-emerald-500">& IoT</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-10 text-sm">
              Innovative hardware projects integrating microcontrollers, custom PCB designs, 
              and real-time IoT monitoring dashboards.
            </p>
            <Link 
              href="/projects/embedded" 
              className="flex items-center justify-between group/btn w-full px-6 py-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-emerald-400 font-bold hover:bg-emerald-500 hover:text-white transition-all"
            >
              View Hardware
              <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </div>

        </section>

        {/* Footer Note */}
        <section className="mt-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-zinc-800" />
             <FaBolt className="text-zinc-700" size={14} />
             <div className="h-[1px] w-12 bg-zinc-800" />
          </div>
          <p className="text-zinc-600 text-[10px] font-bold tracking-[0.4em] uppercase">
            © 2026 Developer Command Center
          </p>
        </section>

      </div>
    </main>
  );
}