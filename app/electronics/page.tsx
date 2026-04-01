'use client';

import Link from 'next/link';

export default function ElectronicsPage() {

  const projects = [
    {
      id: "HW-01",
      title: "IoT Control Hub",
      slug: "iot",
      description: "Smart infrastructure automation using ESP32 with real-time WebSocket telemetry and low-latency remote appliance control.",
      features: ["MQTT", "Telemetry", "Real-time"],
      status: "Operational",
      spec: "ESP32-WROOM",
      isReady: false 
    },
    {
      id: "HW-02",
      title: "Embedded Systems",
      slug: "embedded",
      description: "Low-level C++ firmware development for ARM Cortex-M series focusing on RTOS scheduling and high-efficiency memory management.",
      features: ["RTOS", "DMA", "Interrupts"],
      status: "Development",
      spec: "ARM Cortex-M4",
      isReady: false
    },
    {
      id: "HW-03",
      title: "Circuit Design",
      slug: "circuits",
      description: "High-speed PCB layout and multilayer hardware design with signal integrity analysis and localized EMI shielding.",
      features: ["Multilayer", "BOM", "Signal Integrity"],
      status: "Testing",
      spec: "4-Layer Stackup",
      isReady: false
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-x-hidden selection:bg-blue-500/40">
      
      {/* ATMOSPHERIC BACKGROUND (Responsive scaling) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[120%] md:w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[80px] md:blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-48 pb-20 md:pb-32">
        
        {/* HEADER SECTION - Fluid Typography */}
        <header className="mb-16 md:mb-24 border-l border-blue-500/30 pl-6 md:pl-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[8px] md:text-[9px] font-black text-blue-400 uppercase tracking-[0.4em] md:tracking-[0.6em] whitespace-nowrap">Hardware Protocol // Lab 03</span>
            <div className="h-[1px] w-12 md:w-20 bg-white/10"></div>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white mb-6 md:mb-8 uppercase leading-[0.9] md:leading-none">
            Electronics <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-900/50">Lab.</span>
          </h1>
          <p className="text-slate-400 text-[10px] md:text-sm max-w-2xl font-medium leading-relaxed uppercase tracking-[0.1em] md:tracking-widest">
            Industrial hardware engineering. Integrating custom <span className="text-white">Firmware</span>, <span className="text-white">PCB Architecture</span>, and encrypted <span className="text-white">Telemetry</span>.
          </p>
        </header>

        {/* PROJECT LISTING */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div 
              key={project.slug} 
              className="group relative bg-white/[0.02] border border-white/5 rounded-[24px] md:rounded-[32px] p-8 md:p-14 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-blue-400/30"
            >
              <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-10 lg:gap-12">
                
                {/* Left: Component Details */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-8">
                    <span className="text-[8px] md:text-[10px] font-black text-blue-400 font-mono tracking-widest border border-blue-400/20 px-3 py-1 rounded">
                      {project.id}
                    </span>
                    <span className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] md:tracking-[0.4em]">
                      Lab Status: {project.status}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter group-hover:text-blue-300 transition-colors leading-none">
                    {project.title}
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.features.map((feature) => (
                      <span key={feature} className="text-[8px] md:text-[9px] font-black px-3 md:px-4 py-2 bg-blue-500/5 text-slate-500 rounded-full border border-white/5 uppercase tracking-widest group-hover:border-blue-400/20 group-hover:text-slate-300 transition-all">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Hardware Specs & Action (Stacks on mobile) */}
                <div className="flex flex-row lg:flex-col justify-between items-end lg:items-end shrink-0 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-16">
                  <div className="text-left lg:text-right">
                    <p className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] mb-1 md:mb-2">System Core</p>
                    <p className="text-white font-bold tracking-widest uppercase text-xs md:text-base">{project.spec}</p>
                  </div>

                  <div className="mt-0 lg:mt-12">
                    {project.isReady ? (
                      <Link 
                        href={`/tech/${project.slug}`}
                        className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-white text-[#0B121E] rounded-full font-black uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] hover:bg-blue-500 hover:text-white transition-all shadow-2xl active:scale-95"
                      >
                        View Specs
                      </Link>
                    ) : (
                      <div className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-white/5 text-slate-600 rounded-full font-black uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] border border-white/5 cursor-not-allowed">
                        <span className="w-2 h-2 bg-blue-900 rounded-full mr-2 md:mr-3 animate-pulse shadow-[0_0_8px_rgba(30,58,138,0.8)]"></span>
                        <span className="whitespace-nowrap">Coming Shortly</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Background ID branding - hidden on small mobile */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 text-[100px] md:text-[180px] font-black text-white/[0.02] select-none pointer-events-none uppercase italic tracking-tighter">
                {project.id.split('-')[1]}
              </div>
            </div>
          ))}
        </div>

        {/* DIAGNOSTIC FOOTER - Responsive Padding/Layout */}
        <footer className="mt-20 md:mt-32 p-8 md:p-12 bg-blue-500/[0.03] border border-blue-500/10 rounded-[32px] md:rounded-[48px] flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-12">
          <div className="flex items-center gap-6 md:gap-8">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#0B121E] border border-blue-500/20 flex items-center justify-center overflow-hidden shrink-0">
               <div className="w-full h-[2px] bg-blue-500/50 animate-[bounce_3s_infinite] shadow-[0_0_15px_blue]"></div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-tighter text-lg md:text-xl">Embedded Architecture</h4>
              <p className="text-slate-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-1 italic">Real-time Telemetry // EMI Shielding // C++20</p>
            </div>
          </div>
          
          <div className="flex gap-6 md:gap-8 w-full md:w-auto border-t md:border-t-0 border-white/5 pt-8 md:pt-0">
            <div className="flex-1 md:flex-none text-center">
              <span className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">Controller</span>
              <div className="mt-2 text-blue-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">ESP32 / ARM</div>
            </div>
            <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
            <div className="flex-1 md:flex-none text-center">
              <span className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">Memory</span>
              <div className="mt-2 text-blue-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">SRAM / Flash</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}