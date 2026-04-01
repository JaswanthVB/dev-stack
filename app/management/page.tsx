'use client';

import Link from 'next/link';

export default function ManagementPage() {
  
  const systems = [
    {
      id: "SYS-001",
      title: "School ERP",
      slug: "school",
      description: "Unified academic orchestration. Handles student enrollment lifecycles, faculty allocation, and automated grading heuristics.",
      features: ["Student Portal", "Attendance", "Fees"],
      status: "Operational",
      metrics: "99.9% Uptime",
      isReady: false 
    },
    {
      id: "SYS-002",
      title: "Hospital HMS",
      slug: "hospital",
      description: "Mission-critical healthcare administration. Features EMR integration, doctor-patient scheduling, and pharmacy telemetry.",
      features: ["EMR", "Scheduling", "Inventory"],
      status: "Development",
      metrics: "Beta v2.4",
      isReady: false
    },
    {
      id: "SYS-003",
      title: "Restaurant POS",
      slug: "restaurant",
      description: "Real-time hospitality synchronization. Digital menu state management and kitchen order analytics for high-volume environments.",
      features: ["Live Sync", "Tables", "Analytics"],
      status: "Testing",
      metrics: "42ms Latency",
      isReady: false
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-x-hidden selection:bg-indigo-500/40">
      
      {/* ATMOSPHERIC BACKGROUND (Responsive scaling) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-5%] left-[-10%] w-[120%] md:w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-48 pb-20 md:pb-32">
        
        {/* HEADER SECTION - Fluid Typography */}
        <header className="mb-16 md:mb-24 border-l border-indigo-500/30 pl-6 md:pl-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[8px] md:text-[9px] font-black text-indigo-500 uppercase tracking-[0.4em] md:tracking-[0.6em] whitespace-nowrap">Protocol 02 // Registry</span>
            <div className="h-[1px] w-12 md:w-20 bg-white/10"></div>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white mb-6 md:mb-8 uppercase leading-[0.9] md:leading-none">
            Management <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-indigo-300">Central.</span>
          </h1>
          <p className="text-slate-400 text-[10px] md:text-sm max-w-2xl font-medium leading-relaxed uppercase tracking-[0.1em] md:tracking-widest">
            Multi-tenant architecture registry. Orchestrated via centralized <span className="text-white">Flask API</span> nodes and <span className="text-white">PostgreSQL 16</span> clusters.
          </p>
        </header>

        {/* SYSTEMS LISTING */}
        <div className="grid grid-cols-1 gap-6">
          {systems.map((system) => (
            <div 
              key={system.slug} 
              className="group relative bg-white/[0.02] border border-white/5 rounded-[24px] md:rounded-[32px] p-8 md:p-14 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-indigo-500/30"
            >
              <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-10 lg:gap-12">
                
                {/* Left: Identity */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-8">
                    <span className="text-[8px] md:text-[10px] font-black text-indigo-500 font-mono tracking-widest bg-indigo-500/10 px-3 py-1 rounded">
                      {system.id}
                    </span>
                    <span className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] md:tracking-[0.4em]">
                      Status: {system.status}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter group-hover:text-indigo-300 transition-colors leading-none">
                    {system.title}
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed font-medium">
                    {system.description}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {system.features.map((feature) => (
                      <span key={feature} className="text-[8px] md:text-[9px] font-black px-3 md:px-4 py-2 bg-white/5 text-slate-500 rounded-full border border-white/5 uppercase tracking-widest group-hover:border-indigo-500/20 group-hover:text-slate-300 transition-all">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Actions & Metrics (Stacks on mobile) */}
                <div className="flex flex-row lg:flex-col justify-between items-end lg:items-end shrink-0 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-16">
                  <div className="text-left lg:text-right">
                    <p className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] mb-1 md:mb-2">Live Metrics</p>
                    <p className="text-white font-bold tracking-widest uppercase text-xs md:text-base">{system.metrics}</p>
                  </div>

                  <div className="mt-0 lg:mt-12">
                    {system.isReady ? (
                      <Link 
                        href={`/web/${system.slug}`}
                        className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-white text-[#0B121E] rounded-full font-black uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] hover:bg-indigo-500 hover:text-white transition-all shadow-2xl active:scale-95"
                      >
                        Enter Interface
                      </Link>
                    ) : (
                      <div className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-white/5 text-slate-600 rounded-full font-black uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] border border-white/5 cursor-not-allowed">
                        <span className="w-2 h-2 bg-slate-700 rounded-full mr-2 md:mr-3 animate-pulse"></span>
                        <span className="whitespace-nowrap">Coming Shortly</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Background text hidden on smaller mobiles to keep it clean */}
              <div className="hidden sm:block absolute top-1/2 -right-10 -translate-y-1/2 text-[100px] md:text-[140px] font-black text-white/[0.01] select-none pointer-events-none uppercase italic">
                {system.slug}
              </div>
            </div>
          ))}
        </div>

        {/* SECURITY FOOTER - Responsive Padding/Layout */}
        <footer className="mt-20 md:mt-32 p-8 md:p-12 bg-indigo-500/[0.03] border border-indigo-500/10 rounded-[32px] md:rounded-[48px] flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-12">
          <div className="flex items-center gap-6 md:gap-8">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#0B121E] border border-indigo-500/20 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 bg-indigo-500 animate-pulse rounded-full"></div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-tighter text-lg md:text-xl">Core Shield Encryption</h4>
              <p className="text-slate-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-1">JWT Auth // SSL v3 // AES-256</p>
            </div>
          </div>
          
          <div className="flex gap-6 md:gap-8 w-full md:w-auto border-t md:border-t-0 border-white/5 pt-8 md:pt-0">
            <div className="flex-1 md:flex-none text-center">
              <span className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">Primary DB</span>
              <div className="mt-2 text-indigo-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">Postgres 16</div>
            </div>
            <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
            <div className="flex-1 md:flex-none text-center">
              <span className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">Engine</span>
              <div className="mt-2 text-indigo-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">Flask 3.0</div>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}