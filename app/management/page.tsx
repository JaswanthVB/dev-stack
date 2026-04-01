'use client';

import Link from 'next/link';

export default function ManagementPage() {
  
  const systems = [
    {
      id: "SYS-001",
      title: "School ERP",
      slug: "school",
      description: "Unified academic orchestration. Handles student enrollment lifecycles, faculty allocation, and automated grading heuristics.",
      features: ["Student Portal", "Attendance Tracking", "Fee Management"],
      status: "Operational",
      metrics: "99.9% Uptime",
      isReady: false // Track if the page is done
    },
    {
      id: "SYS-002",
      title: "Hospital HMS",
      slug: "hospital",
      description: "Mission-critical healthcare administration. Features EMR integration, doctor-patient scheduling, and pharmacy telemetry.",
      features: ["EMR Integration", "Appointment Engine", "Pharmacy Inventory"],
      status: "Development",
      metrics: "Beta v2.4",
      isReady: false
    },
    {
      id: "SYS-003",
      title: "Restaurant POS",
      slug: "restaurant",
      description: "Real-time hospitality synchronization. Digital menu state management and kitchen order analytics for high-volume environments.",
      features: ["Live Order Sync", "Table Management", "Revenue Analytics"],
      status: "Testing",
      metrics: "Latency: 42ms",
      isReady: false
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-hidden selection:bg-indigo-500/40">
      
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 pt-48 pb-32">
        
        {/* HEADER SECTION */}
        <header className="mb-24 border-l border-indigo-500/30 pl-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.6em]">Protocol 02 // Registry</span>
            <div className="h-[1px] w-20 bg-white/10"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 uppercase leading-none">
            Management <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-indigo-300">Central.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed uppercase text-[12px] tracking-widest">
            Multi-tenant architecture registry. Orchestrated via centralized <span className="text-white">Flask API</span> nodes and <span className="text-white">PostgreSQL 16</span> clusters.
          </p>
        </header>

        {/* SYSTEMS LISTING */}
        <div className="grid grid-cols-1 gap-6">
          {systems.map((system) => (
            <div 
              key={system.slug} 
              className="group relative bg-white/[0.02] border border-white/5 rounded-[32px] p-10 md:p-14 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-indigo-500/30"
            >
              <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
                
                {/* Left: Identity */}
                <div className="flex-grow">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-[10px] font-black text-indigo-500 font-mono tracking-widest bg-indigo-500/10 px-3 py-1 rounded">
                      {system.id}
                    </span>
                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">
                      Status: {system.status}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter group-hover:text-indigo-300 transition-colors">
                    {system.title}
                  </h2>
                  <p className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed font-medium">
                    {system.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {system.features.map((feature) => (
                      <span key={feature} className="text-[9px] font-black px-4 py-2 bg-white/5 text-slate-500 rounded-full border border-white/5 uppercase tracking-widest group-hover:border-indigo-500/20 group-hover:text-slate-300 transition-all">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Actions & Metrics */}
                <div className="flex flex-col justify-between items-start md:items-end shrink-0 border-t md:border-t-0 md:border-l border-white/5 pt-10 md:pt-0 md:pl-16">
                  <div className="text-left md:text-right mb-12">
                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] mb-2">Live Metrics</p>
                    <p className="text-white font-bold tracking-widest uppercase">{system.metrics}</p>
                  </div>

                  {system.isReady ? (
                    <Link 
                      href={`/web/${system.slug}`}
                      className="inline-flex items-center px-10 py-5 bg-white text-[#0B121E] rounded-full font-black uppercase text-[10px] tracking-[0.4em] hover:bg-indigo-500 hover:text-white transition-all shadow-2xl active:scale-95"
                    >
                      Enter Interface
                    </Link>
                  ) : (
                    <div className="inline-flex items-center px-10 py-5 bg-white/5 text-slate-600 rounded-full font-black uppercase text-[10px] tracking-[0.4em] border border-white/5 cursor-not-allowed">
                      <span className="w-2 h-2 bg-slate-700 rounded-full mr-3 animate-pulse"></span>
                      Coming Shortly
                    </div>
                  )}
                </div>
              </div>

              {/* Subtle background text */}
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-[140px] font-black text-white/[0.01] select-none pointer-events-none uppercase italic">
                {system.slug}
              </div>
            </div>
          ))}
        </div>

        {/* SECURITY FOOTER */}
        <footer className="mt-32 p-12 bg-indigo-500/[0.03] border border-indigo-500/10 rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-[#0B121E] border border-indigo-500/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-indigo-500 animate-pulse rounded-full"></div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-tighter text-xl">Core Shield Encryption</h4>
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest mt-1">JWT Auth // SSL v3 // AES-256</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="text-center">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">Primary DB</span>
              <div className="mt-2 text-indigo-400 font-bold tracking-widest text-xs uppercase">Postgres 16</div>
            </div>
            <div className="w-[1px] h-10 bg-white/10"></div>
            <div className="text-center">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">Engine</span>
              <div className="mt-2 text-indigo-400 font-bold tracking-widest text-xs uppercase">Flask 3.0</div>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}