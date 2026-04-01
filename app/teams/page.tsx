'use client';

import Link from 'next/link';

// 1. DATA STRUCTURE: Add new engineers here in the future
const ENGINEERS_DATA = [
  {
    id: "UID-001-JVB",
    name: "Jaswanth Varma",
    role: "Lead Full Stack Architect",
    specialization: "Cloud Infrastructure & Logic",
    stack: ["Next.js", "Python", "Postgres", "C"],
    socials: [
      { label: "GitHub", href: "https://github.com/jaswanthVB" },
      { label: "LinkedIn", href: "#" },
      { label: "Discord", href: "#" },
    ]
  },
  {
    id: "UID-002-ARD",
    name: "Anvit Reddy",
    role: "Low-Level Systems Developer",
    specialization: "Hardware Interfacing & Graphics",
    stack: ["C", "C++", "Next.js", "RTOS"],
    socials: [
      { label: "GitHub", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Discord", href: "#" },
    ]
  },
];

export default function EngineersPage() {
  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-x-hidden selection:bg-indigo-500/40">
      
      {/* ATMOSPHERIC BACKGROUND (Responsive) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-10%] left-[20%] w-[120%] md:w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-48 pb-20 md:pb-32">
        
        {/* HEADER SECTION */}
        <header className="mb-16 md:mb-24 border-l border-indigo-500/30 pl-6 md:pl-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[8px] md:text-[9px] font-black text-indigo-500 uppercase tracking-[0.4em] md:tracking-[0.6em] whitespace-nowrap">Protocol 03 // Personnel</span>
            <div className="h-[1px] w-12 md:w-20 bg-white/10"></div>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white mb-6 md:mb-8 uppercase leading-[0.9] md:leading-none transition-all">
            Core <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-indigo-100">Engineers.</span>
          </h1>
          <p className="text-slate-400 text-[10px] md:text-sm max-w-2xl font-medium leading-relaxed uppercase tracking-[0.1em] md:tracking-widest">
            The architects behind the <span className="text-white">Vault</span> ecosystem. Specializing in high-availability software and low-level hardware orchestration.
          </p>
        </header>

        {/* AUTOMATIC FLEXIBLE GRID (1-col mobile, 2-col desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {ENGINEERS_DATA.map((dev) => (
            <EngineerCard key={dev.id} dev={dev} />
          ))}
        </div>

        {/* COLLABORATION FOOTER */}
        <footer className="mt-24 md:mt-32 text-center px-4">
            <div className="inline-block p-[0.5px] rounded-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent w-full max-w-2xl mb-12"></div>
            <p className="text-[8px] md:text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] md:tracking-[1em]">End of Personnel Registry // Solid State Archive</p>
        </footer>
      </div>
    </main>
  );
}

function EngineerCard({ dev }: { dev: typeof ENGINEERS_DATA[0] }) {
  const [firstName, ...lastNameParts] = dev.name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <div className="group relative bg-white/[0.02] border border-white/5 rounded-[32px] md:rounded-[40px] p-8 md:p-12 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-indigo-500/30">
      
      {/* Identity Section */}
      <div className="relative z-10 mb-10 md:mb-12">
        <p className="text-[8px] md:text-[9px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-4 font-mono">{dev.id}</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-indigo-200 transition-all leading-none">
          {firstName} <br/> 
          <span className="opacity-20 group-hover:opacity-40 transition-opacity">{lastName}</span>
        </h2>
        <p className="text-indigo-400/80 font-bold text-[10px] md:text-xs uppercase tracking-widest mt-4">
          {dev.role}
        </p>
      </div>

      {/* Stack Section */}
      <div className="relative z-10 mb-12 md:mb-16">
        <p className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4 md:mb-6">Capabilities</p>
        <div className="flex flex-wrap gap-2">
          {dev.stack.map((tech) => (
            <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/5 rounded-full text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:border-indigo-500/20 group-hover:text-slate-300 transition-all">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Socials - Horizontal scrolling on very small screens if needed, otherwise wrap */}
      <div className="relative z-10 flex flex-wrap gap-x-6 md:gap-x-8 gap-y-4 border-t border-white/5 pt-8 md:pt-10">
        {dev.socials.map((social) => (
          <a 
            key={social.label}
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-2 group/link"
          >
            <div className="w-1 h-1 bg-indigo-500 rounded-full scale-0 group-hover/link:scale-100 transition-transform duration-300"></div>
            {social.label}
          </a>
        ))}
      </div>

      {/* Decorative Initial (Scaled for mobile) */}
      <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-4 text-[150px] md:text-[220px] font-black text-white/[0.02] select-none pointer-events-none uppercase italic leading-none transition-all duration-1000 group-hover:text-indigo-500/[0.03] group-hover:translate-y-4">
        {dev.name[0]}
      </div>
    </div>
  );
}