'use client';

import Link from 'next/link';

export default function ElectronicsPage() {

  const projects = [
    {
      id: "HW-01",
      title: "IoT Control Hub",
      slug: "iot",
      description: "Smart infrastructure automation using ESP32 with real-time WebSocket telemetry and low-latency remote appliance control.",
      features: ["MQTT Protocol", "Real-time Dashboard", "Sensor Analytics"],
      status: "Operational",
      spec: "ESP32-WROOM",
      isReady: false // Future template toggle
    },
    {
      id: "HW-02",
      title: "Embedded Systems",
      slug: "embedded",
      description: "Low-level C++ firmware development for ARM Cortex-M series focusing on RTOS scheduling and high-efficiency memory management.",
      features: ["RTOS Scheduling", "DMA Management", "Interrupt Handling"],
      status: "Development",
      spec: "ARM Cortex-M4",
      isReady: false
    },
    {
      id: "HW-03",
      title: "Circuit Design",
      slug: "circuits",
      description: "High-speed PCB layout and multilayer hardware design with signal integrity analysis and localized EMI shielding.",
      features: ["Multilayer PCB", "BOM Optimization", "Signal Integrity"],
      status: "Testing",
      spec: "4-Layer Stackup",
      isReady: false
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-hidden selection:bg-blue-500/40">
      
      {/* NAVIGATION SPACE BUFFER 
          Note: Ensure any future hardware detail templates use pt-32 or pt-48 
          to clear the fixed Vault.sys navbar.
      */}

      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 pt-48 pb-32">
        
        {/* HEADER SECTION */}
        <header className="mb-24 border-l border-blue-500/30 pl-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.6em]">Hardware Protocol // Lab 03</span>
            <div className="h-[1px] w-20 bg-white/10"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 uppercase leading-none">
            Electronics <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-900/50">Lab.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed uppercase text-[12px] tracking-widest">
            Industrial hardware engineering. Integrating custom <span className="text-white">Firmware</span>, <span className="text-white">PCB Architecture</span>, and encrypted <span className="text-white">Telemetry</span>.
          </p>
        </header>

        {/* PROJECT LISTING */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div 
              key={project.slug} 
              className="group relative bg-white/[0.02] border border-white/5 rounded-[32px] p-10 md:p-14 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-blue-400/30"
            >
              <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
                
                {/* Left: Component Details */}
                <div className="flex-grow">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-[10px] font-black text-blue-400 font-mono tracking-widest border border-blue-400/20 px-3 py-1 rounded">
                      {project.id}
                    </span>
                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">
                      Lab Status: {project.status}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.features.map((feature) => (
                      <span key={feature} className="text-[9px] font-black px-4 py-2 bg-blue-500/5 text-slate-500 rounded-full border border-white/5 uppercase tracking-widest group-hover:border-blue-400/20 group-hover:text-slate-300 transition-all">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Hardware Specs & Action */}
                <div className="flex flex-col justify-between items-start md:items-end shrink-0 border-t md:border-t-0 md:border-l border-white/5 pt-10 md:pt-0 md:pl-16">
                  <div className="text-left md:text-right mb-12">
                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] mb-2">System Core</p>
                    <p className="text-white font-bold tracking-widest uppercase">{project.spec}</p>
                  </div>

                  {project.isReady ? (
                    <Link 
                      href={`/tech/${project.slug}`}
                      className="inline-flex items-center px-10 py-5 bg-white text-[#0B121E] rounded-full font-black uppercase text-[10px] tracking-[0.4em] hover:bg-blue-500 hover:text-white transition-all shadow-2xl active:scale-95"
                    >
                      View Specs
                    </Link>
                  ) : (
                    <div className="inline-flex items-center px-10 py-5 bg-white/5 text-slate-600 rounded-full font-black uppercase text-[10px] tracking-[0.4em] border border-white/5 cursor-not-allowed">
                      <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 animate-pulse shadow-[0_0_8px_rgba(30,58,138,0.8)]"></span>
                      Coming Shortly
                    </div>
                  )}
                </div>
              </div>

              {/* Background ID branding */}
              <div className="absolute -bottom-12 -right-12 text-[180px] font-black text-white/[0.02] select-none pointer-events-none uppercase italic tracking-tighter">
                {project.id.split('-')[1]}
              </div>
            </div>
          ))}
        </div>

        {/* DIAGNOSTIC FOOTER */}
        <footer className="mt-32 p-12 bg-blue-500/[0.03] border border-blue-500/10 rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-[#0B121E] border border-blue-500/20 flex items-center justify-center overflow-hidden">
               <div className="w-full h-[2px] bg-blue-500/50 animate-[bounce_3s_infinite] shadow-[0_0_15px_blue]"></div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-tighter text-xl">Embedded Architecture</h4>
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest mt-1 italic">Real-time Telemetry // EMI Shielding // C++20</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="text-center">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">Controller</span>
              <div className="mt-2 text-blue-400 font-bold tracking-widest text-xs uppercase">ESP32 / ARM</div>
            </div>
            <div className="w-[1px] h-10 bg-white/10"></div>
            <div className="text-center">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">Memory</span>
              <div className="mt-2 text-blue-400 font-bold tracking-widest text-xs uppercase">SRAM / Flash</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}