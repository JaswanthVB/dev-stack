'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-x-hidden selection:bg-indigo-500/40">
      
      {/* 1. LAYERED BACKGROUND (Universal scaling) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        {/* Glows scale based on screen width to prevent "black holes" on desktop */}
        <div className="absolute top-[-5%] left-[-10%] w-[120%] md:w-[70%] h-[60%] bg-indigo-600/20 rounded-full blur-[80px] md:blur-[160px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[100%] md:w-[50%] h-[50%] bg-blue-700/10 rounded-full blur-[100px] md:blur-[140px]"></div>
        
        {/* Adaptive Grid: Denser on mobile, spacious on desktop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-64 pb-20 md:pb-32">
        
        {/* 2. HERO SECTION */}
        <section className="mb-32 md:mb-72">
          {/* Badge: Stacks on tiny screens, inline on desktop */}
          <div className="inline-flex items-center gap-3 md:gap-6 mb-10 md:mb-16 px-4 md:px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-indigo-400 whitespace-nowrap">System Live</span>
            <div className="w-[1px] h-3 bg-white/10"></div>
            <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-slate-500 whitespace-nowrap">Operational Intelligence // 2026</span>
          </div>

          {/* Fluid Typography: 5xl -> 160px */}
          <h1 className="text-5xl sm:text-7xl md:text-[140px] lg:text-[160px] font-black tracking-tighter text-white mb-12 md:mb-20 leading-[0.9] md:leading-[0.75] uppercase transition-all duration-500">
            Systems <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-slate-100 to-indigo-900/50">Architect.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            <div className="md:col-span-7 lg:col-span-6">
              <p className="text-slate-300 text-lg md:text-2xl leading-tight font-bold uppercase tracking-tight max-w-md">
                Engineering high-integrity software-hardware bridges for critical enterprise sectors.
              </p>
            </div>
            
            {/* Division Links: Horizontal on all screens, but aligned right on desktop */}
            <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start md:items-end justify-center">
               <div className="flex gap-8 md:gap-16">
                  <div className="group cursor-default">
                    <p className="text-[8px] md:text-[10px] font-black text-indigo-500/50 uppercase tracking-[0.5em] mb-2 md:mb-4 transition-colors group-hover:text-indigo-400">Division 01</p>
                    <Link href="/management" className="text-white font-black text-sm md:text-lg border-b-2 border-indigo-500/30 group-hover:border-white transition-all pb-1 uppercase tracking-[0.2em]">Software</Link>
                  </div>
                  <div className="group cursor-default">
                    <p className="text-[8px] md:text-[10px] font-black text-indigo-500/50 uppercase tracking-[0.5em] mb-2 md:mb-4 transition-colors group-hover:text-indigo-400">Division 02</p>
                    <Link href="/electronics" className="text-white font-black text-sm md:text-lg border-b-2 border-indigo-500/30 group-hover:border-white transition-all pb-1 uppercase tracking-[0.2em]">Hardware</Link>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. CONTENT BENTO (Stacks to 1-col on mobile, 12-col on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Software Box */}
          <div className="lg:col-span-8 relative group p-8 md:p-16 bg-white/[0.03] border border-white/10 rounded-[32px] md:rounded-[48px] overflow-hidden hover:bg-white/[0.06] transition-all duration-700">
            <div className="absolute top-0 right-0 p-4 md:p-8 text-6xl md:text-[120px] font-black text-white/[0.03] leading-none select-none italic uppercase transition-transform group-hover:scale-110 duration-1000">Dev</div>
            
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter uppercase leading-none">Cloud <br className="hidden md:block" /> Protocols</h3>
            <p className="text-slate-400 text-sm md:text-lg max-w-md font-medium leading-relaxed mb-10 md:mb-12">
              Proprietary ERP and HMS ecosystems built with high-availability synchronization for distributed enterprise environments.
            </p>
            <Link href="/management" className="inline-block w-full md:w-auto text-center px-10 md:px-12 py-4 bg-white text-[#0B121E] text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-indigo-400 hover:text-white transition-all shadow-2xl">
              Launch Environment
            </Link>
          </div>

          {/* Hardware Box */}
          <div className="lg:col-span-4 p-8 md:p-12 bg-gradient-to-br from-indigo-600/20 to-transparent border border-white/10 rounded-[32px] md:rounded-[48px] flex flex-col justify-between group hover:border-indigo-400/50 transition-all duration-500">
             <div className="flex flex-col gap-3 mb-12 lg:mb-0">
                <span className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.5em]">Lab Status</span>
                <div className="h-[1px] w-8 bg-indigo-500/30 group-hover:w-full transition-all duration-700"></div>
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.5em]">Hardware Access // Online</span>
             </div>
             <div>
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter leading-none">IoT & <br/> Circuitry</h3>
                <p className="text-slate-400 text-[10px] font-black leading-relaxed mb-10 uppercase tracking-[0.2em]">
                  Firmware engineering and multi-layer PCB architecture.
                </p>
                <Link href="/electronics" className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] group-hover:text-indigo-300 transition-colors">
                  Specifications —
                </Link>
             </div>
          </div>
        </div>

        {/* 4. STATUS FOOTER (Legacy Identity) */}
        <section className="mt-32 md:mt-64 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-20 border-t border-white/10 pt-16 md:pt-20">
          <div className="flex flex-col">
            <p className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
              Solid <br/> <span className="text-indigo-500/40">State.</span>
            </p>
            <p className="text-[9px] md:text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] md:tracking-[0.8em] mt-6 md:mt-8">Legacy Industrial Systems // Est. 2026</p>
          </div>

          <div className="flex flex-row gap-8 md:gap-20">
            <a href="https://github.com/jaswanthVB" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2 md:gap-3">
              <span className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] md:tracking-[0.4em] group-hover:text-indigo-300 transition-colors">GitHub Repo</span>
              <div className="h-[2px] w-4 bg-indigo-500/20 group-hover:w-full group-hover:bg-indigo-500 transition-all duration-500"></div>
            </a>
            <Link href="/collaborate" className="group flex flex-col gap-2 md:gap-3">
              <span className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] md:tracking-[0.4em] group-hover:text-indigo-300 transition-colors">Inquiries</span>
              <div className="h-[2px] w-4 bg-indigo-500/20 group-hover:w-full group-hover:bg-indigo-500 transition-all duration-500"></div>
            </Link>
          </div>
        </section>

        {/* 5. ARCHIVE STAMP */}
        <div className="mt-20 md:mt-40 text-center opacity-10">
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[2em] md:tracking-[4em] text-white select-none">Solid_State_Archive</span>
        </div>
      </div>
    </main>
  );
}