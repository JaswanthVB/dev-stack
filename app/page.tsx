'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-hidden selection:bg-indigo-500/40">
      
      {/* ILLUMINATED BACKGROUND TEXTURE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-600/20 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] bg-blue-700/10 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 pt-64 pb-32">
        
        {/* HERO SECTION */}
        <section className="mb-72">
          <div className="inline-flex items-center gap-6 mb-16 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <span className="text-[8px] font-black uppercase tracking-[0.6em] text-indigo-400">System Live</span>
            <div className="w-[1px] h-3 bg-white/10"></div>
            <span className="text-[8px] font-black uppercase tracking-[0.6em] text-slate-500">Operational Intelligence // 2026</span>
          </div>

          <h1 className="text-8xl md:text-[160px] font-black tracking-tighter text-white mb-20 leading-[0.75] uppercase">
            Systems <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-slate-100 to-indigo-900/50">Architect.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-6">
              <p className="text-slate-300 text-xl md:text-2xl leading-[1.1] font-bold uppercase tracking-tight">
                Engineering high-integrity software-hardware bridges for critical enterprise sectors.
              </p>
            </div>
            <div className="md:col-span-6 flex flex-col items-start md:items-end justify-center">
               <div className="flex gap-16">
                  <div className="group cursor-default">
                    <p className="text-[10px] font-black text-indigo-500/50 uppercase tracking-[0.5em] mb-4">Division 01</p>
                    <Link href="/management" className="text-white font-black text-lg border-b-2 border-indigo-500/30 group-hover:border-white transition-all pb-1 uppercase tracking-[0.2em]">Software</Link>
                  </div>
                  <div className="group cursor-default">
                    <p className="text-[10px] font-black text-indigo-500/50 uppercase tracking-[0.5em] mb-4">Division 02</p>
                    <Link href="/electronics" className="text-white font-black text-lg border-b-2 border-indigo-500/30 group-hover:border-white transition-all pb-1 uppercase tracking-[0.2em]">Hardware</Link>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* CONTENT PREVIEW BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 relative group p-16 bg-white/[0.03] border border-white/10 rounded-[48px] overflow-hidden hover:bg-white/[0.06] transition-all duration-700">
            <div className="absolute top-0 right-0 p-8 text-[120px] font-black text-white/[0.03] leading-none select-none italic uppercase">Dev</div>
            
            <h3 className="text-6xl font-black text-white mb-8 tracking-tighter uppercase">Cloud <br/> Protocols</h3>
            <p className="text-slate-400 text-lg max-w-md font-medium leading-relaxed mb-12">
              Proprietary ERP and HMS ecosystems built with high-availability synchronization for distributed enterprise environments.
            </p>
            <Link href="/management" className="inline-block px-12 py-4 bg-white text-[#0B121E] text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-indigo-400 hover:text-white transition-all shadow-2xl">
              Launch Environment
            </Link>
          </div>

          <div className="md:col-span-4 p-12 bg-gradient-to-br from-indigo-600/20 to-transparent border border-white/10 rounded-[48px] flex flex-col justify-between group hover:border-indigo-400/50 transition-all">
             <div className="flex flex-col gap-3">
                <span className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.5em]">Lab Status</span>
                <div className="h-[1px] w-8 bg-indigo-500/30"></div>
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.5em]">Hardware Access // Online</span>
             </div>
             <div>
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">IoT & <br/> Circuitry</h3>
                <p className="text-slate-400 text-[10px] font-black leading-relaxed mb-10 uppercase tracking-[0.2em]">
                  Firmware engineering and multi-layer PCB architecture.
                </p>
                <Link href="/electronics" className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] group-hover:text-indigo-300 transition-colors">
                  Specifications —
                </Link>
             </div>
          </div>
        </div>

        {/* STATUS FOOTER */}
        <section className="mt-64 flex flex-col md:flex-row justify-between items-start md:items-center gap-20 border-t border-white/10 pt-20">
          <div className="flex flex-col">
            <p className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
              Solid <br/> <span className="text-indigo-500/40">State.</span>
            </p>
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.8em] mt-8">Legacy Industrial Systems // Est. 2026</p>
          </div>

          <div className="flex gap-20">
            <a href="https://github.com/jaswanthVB" className="group flex flex-col gap-3">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] group-hover:text-indigo-300 transition-colors">GitHub Repo</span>
              <div className="h-[2px] w-4 bg-indigo-500/20 group-hover:w-full group-hover:bg-indigo-500 transition-all"></div>
            </a>
            <Link href="/collaborate" className="group flex flex-col gap-3">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] group-hover:text-indigo-300 transition-colors">Inquiries</span>
              <div className="h-[2px] w-4 bg-indigo-500/20 group-hover:w-full group-hover:bg-indigo-500 transition-all"></div>
            </Link>
          </div>
        </section>

        <div className="mt-40 text-center opacity-10">
            <span className="text-[10px] font-black uppercase tracking-[4em] text-white">Solid_State_Archive</span>
        </div>
      </div>
    </main>
  );
}