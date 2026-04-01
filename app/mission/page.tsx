'use client';

import Link from 'next/link';

export default function MissionPage() {
  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-x-hidden selection:bg-indigo-500/40">
      
      {/* BACKGROUND LAYER (Universal Scaling) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[120%] md:w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 pt-32 md:pt-48 pb-20 md:pb-32">
        
        {/* BACK NAVIGATION */}
        <Link href="/" className="group inline-flex items-center gap-4 mb-16 md:mb-20 transition-all">
          <div className="h-[1px] w-6 bg-indigo-500/50 group-hover:w-10 transition-all duration-500"></div>
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-white transition-colors">
            Return to Vault
          </span>
        </Link>

        {/* HEADER SECTION - Fluid Typography */}
        <header className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-[8px] md:text-[9px] font-black text-indigo-500 uppercase tracking-[0.6em] whitespace-nowrap">Protocol 00 // Mission</span>
            <div className="h-[1px] flex-grow bg-white/5"></div>
          </div>
          
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white mb-10 md:mb-12 uppercase leading-[0.9] md:leading-none transition-all">
            Our <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-slate-600">Mission.</span>
          </h1>
          
          <div className="max-w-2xl border-l-2 border-indigo-500/30 pl-6 md:pl-10 py-2">
            <p className="text-lg md:text-2xl text-slate-300 font-bold leading-tight uppercase tracking-tight italic opacity-80">
              "To architect a unified digital ecosystem where management software meets hardware innovation."
            </p>
          </div>
        </header>

        {/* MISSION PILLARS - Industrial Responsive Layout */}
        <div className="grid grid-cols-1 gap-16 md:gap-24 mb-32 md:mb-48">
          
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

        {/* CALL TO ACTION - Elevated Box (Responsive) */}
        <section className="relative p-8 md:p-16 bg-white/[0.02] border border-white/5 rounded-[32px] md:rounded-[48px] overflow-hidden text-center group transition-all duration-700 hover:border-indigo-500/30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-indigo-500/50 group-hover:w-full transition-all duration-700"></div>
          
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-none">System Collaboration</h3>
          <p className="text-slate-500 mb-10 md:mb-12 max-w-xs md:max-w-md mx-auto font-medium leading-relaxed uppercase text-[9px] md:text-xs tracking-widest">
            Building better tools for global infrastructure. If you have a project in mind, initiate contact.
          </p>
          
          <Link href="/collaborate" className="inline-block w-full md:w-auto bg-white text-[#0B121E] px-10 md:px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.4em] hover:bg-indigo-500 hover:text-white transition-all shadow-2xl active:scale-95">
            Get in Touch
          </Link>
        </section>

        {/* PAGE FOOTER ID */}
        <div className="mt-24 md:mt-48 flex flex-col md:flex-row justify-between items-center gap-6 opacity-10">
           <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[2em] md:tracking-[3em] text-white">Mission_Statement</span>
           <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest">Solid_State // v.2026</span>
        </div>
      </div>
    </main>
  );
}

function Pillar({ id, title, description, tags }: { id: string, title: string, description: string, tags: string[] }) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
      <div className="md:col-span-1">
        <span className="text-3xl md:text-4xl font-black text-indigo-500/20 group-hover:text-indigo-500 transition-colors duration-500 italic uppercase leading-none">
          {id}
        </span>
      </div>
      <div className="md:col-span-11 lg:col-span-7">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter leading-none transition-all group-hover:translate-x-2 duration-500">{title}</h2>
        <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed mb-8">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {tags.map(tag => (
            <span key={tag} className="px-3 md:px-4 py-1.5 border border-white/5 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-500 rounded-full group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-all duration-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden lg:block md:col-span-4 h-[1px] bg-white/5 mt-5"></div>
    </div>
  );
}