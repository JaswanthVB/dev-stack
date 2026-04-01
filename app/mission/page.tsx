'use client';

import Link from 'next/link';

export default function MissionPage() {
  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-hidden selection:bg-indigo-500/40">
      
      {/* BACKGROUND TEXTURE (Matching Home) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-10 pt-48 pb-32">
        
        {/* BACK NAVIGATION - Subtle & Spaced */}
        <Link href="/" className="group inline-flex items-center gap-4 mb-20">
          <div className="h-[1px] w-6 bg-indigo-500/50 group-hover:w-10 transition-all duration-500"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-white transition-colors">
            Return to Vault
          </span>
        </Link>

        {/* HEADER SECTION */}
        <header className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.6em]">Protocol 00 // Mission</span>
            <div className="h-[1px] flex-grow bg-white/5"></div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-12 uppercase leading-none">
            Our <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-slate-600">Mission.</span>
          </h1>
          
          <div className="max-w-2xl border-l-2 border-indigo-500/30 pl-10 py-2">
            <p className="text-xl md:text-2xl text-slate-300 font-bold leading-tight uppercase tracking-tight italic opacity-80">
              "To architect a unified digital ecosystem where management software meets hardware innovation."
            </p>
          </div>
        </header>

        {/* MISSION PILLARS - Industrial Layout */}
        <div className="grid grid-cols-1 gap-24 mb-48">
          
          <Pillar 
            id="01"
            title="Software Excellence"
            description="Building robust, high-integrity management systems for Healthcare and Education. We prioritize 100% data durability and seamless cross-platform synchronization."
            tags={["Postgres", "High-Concurrency", "ERP"]}
          />

          <Pillar 
            id="02"
            title="Hardware Innovation"
            description="Integrating IoT and Embedded Systems into enterprise management. We bridge the gap between physical sensors and cloud-based analytics."
            tags={["PCB Design", "IoT Telemetry", "Firmware"]}
          />

          <Pillar 
            id="03"
            title="The Master Hub"
            description="Centralizing multi-industry projects into a singular Flask-powered command center. This is a unified registry for industrial-grade deployment."
            tags={["Central Registry", "API Hub", "Scalability"]}
          />

        </div>

        {/* CALL TO ACTION - Elevated Box */}
        <section className="relative p-16 bg-white/[0.02] border border-white/5 rounded-[48px] overflow-hidden text-center group transition-all duration-700 hover:border-indigo-500/30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-indigo-500/50"></div>
          
          <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">System Collaboration</h3>
          <p className="text-slate-500 mb-12 max-w-md mx-auto font-medium leading-relaxed uppercase text-xs tracking-widest">
            Building better tools for global infrastructure. If you have a project in mind, initiate contact.
          </p>
          
          <a href="mailto:jaswanthvarmabolisetty@gmail.com" className="inline-block bg-white text-[#0B121E] px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.4em] hover:bg-indigo-500 hover:text-white transition-all shadow-2xl active:scale-95">
            Get in Touch
          </a>
        </section>

        {/* PAGE FOOTER ID */}
        <div className="mt-48 flex justify-between items-center opacity-10">
           <span className="text-[10px] font-black uppercase tracking-[3em] text-white">Mission_Statement</span>
           <span className="text-[10px] font-black text-white uppercase">v.2026</span>
        </div>
      </div>
    </main>
  );
}

function Pillar({ id, title, description, tags }: { id: string, title: string, description: string, tags: string[] }) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-1">
        <span className="text-4xl font-black text-indigo-500/20 group-hover:text-indigo-500 transition-colors duration-500 italic uppercase leading-none">
          {id}
        </span>
      </div>
      <div className="md:col-span-7">
        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">{title}</h2>
        <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-slate-500 rounded-full group-hover:border-indigo-500/30 transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden md:block md:col-span-4 h-[1px] bg-white/5 mt-5"></div>
    </div>
  );
}