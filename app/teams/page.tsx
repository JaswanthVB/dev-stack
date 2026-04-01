'use client';

import Link from 'next/link';

// 1. DATA STRUCTURE: Add new engineers here in the future
const ENGINEERS_DATA = [
  {
    id: "UID-001-JVB",
    name: "Jaswanth Varma",
    role: "Lead Full Stack Architect",
    specialization: "Cloud Infrastructure & Logic",
    stack: ["Next.js", "Python", "Postgres", "C-Language"],
    socials: [
      { label: "GitHub", href: "https://github.com/jaswanthVB" },
      { label: "LinkedIn", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Instagram", href: "#" },
    ]
  },
  {
    id: "UID-002-ARD",
    name: "Anvit Reddy",
    role: "Low-Level Systems Developer",
    specialization: "Hardware Interfacing & Graphics",
    stack: ["C", "C++", "Next.js", "Embedded Systems"],
    socials: [
      { label: "GitHub", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Instagram", href: "#" },
    ]
  },
  // To add a 3rd engineer, just copy/paste one of the blocks above here.
];

export default function EngineersPage() {
  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-hidden selection:bg-indigo-500/40">
      
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-10%] left-[20%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 pt-48 pb-32">
        
        {/* HEADER SECTION */}
        <header className="mb-24 border-l border-indigo-500/30 pl-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.6em]">Protocol 03 // Personnel</span>
            <div className="h-[1px] w-20 bg-white/10"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 uppercase leading-none">
            Core <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-indigo-100">Engineers.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed uppercase text-[12px] tracking-widest">
            The architects behind the <span className="text-white">Vault</span> ecosystem. Specializing in high-availability software and low-level hardware orchestration.
          </p>
        </header>

        {/* AUTOMATIC FLEXIBLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {ENGINEERS_DATA.map((dev) => (
            <EngineerCard key={dev.id} dev={dev} />
          ))}
        </div>

        {/* COLLABORATION FOOTER */}
        <footer className="mt-32 text-center">
           <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent w-full max-w-2xl mb-12"></div>
           <p className="text-[10px] font-black text-slate-600 uppercase tracking-[1em]">End of Personnel Registry</p>
        </footer>
      </div>
    </main>
  );
}

// 2. COMPONENT LOGIC: This handles the UI for every engineer added to the array
function EngineerCard({ dev }: { dev: typeof ENGINEERS_DATA[0] }) {
  const [firstName, ...lastNameParts] = dev.name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <div className="group relative bg-white/[0.02] border border-white/5 rounded-[40px] p-12 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-indigo-500/30">
      <div className="relative z-10 mb-12">
        <p className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-4">{dev.id}</p>
        <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-indigo-200 transition-colors">
          {firstName} <br/> 
          <span className="opacity-30">{lastName}</span>
        </h2>
        <p className="text-indigo-400/80 font-bold text-xs uppercase tracking-widest mt-4">
          {dev.role}
        </p>
      </div>

      <div className="relative z-10 mb-16">
        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-6">Capabilities</p>
        <div className="flex flex-wrap gap-2">
          {dev.stack.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:border-indigo-500/20 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/5 pt-10">
        {dev.socials.map((social) => (
          <a 
            key={social.label}
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-2 group/link"
          >
            <span className="w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
            {social.label}
          </a>
        ))}
      </div>

      {/* Decorative Initial */}
      <div className="absolute -bottom-10 -right-4 text-[220px] font-black text-white/[0.02] select-none pointer-events-none uppercase italic">
        {dev.name[0]}
      </div>
    </div>
  );
}