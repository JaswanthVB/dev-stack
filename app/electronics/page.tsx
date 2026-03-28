'use client';

import { 
  FaMicrochip, 
  FaCogs, 
  FaArrowRight, 
  FaBroadcastTower, 
  FaProjectDiagram,
  FaMemory, // Replacement for FaCpu
  FaCode // Replacement for FaTerminal
} from 'react-icons/fa';
import Link from 'next/link';

export default function ElectronicsPage() {
  
  const projects = [
    {
      title: "IoT Control Hub",
      slug: "iot",
      description: "Smart infrastructure automation using ESP32 with real-time WebSocket telemetry and remote appliance control.",
      icon: <FaBroadcastTower className="text-emerald-400" />,
      features: ["MQTT Protocol", "Real-time Dashboard", "Sensor Analytics"],
      status: "Operational",
      accent: "border-emerald-500/20"
    },
    {
      title: "Embedded Systems",
      slug: "embedded",
      description: "Low-level C++ firmware development for ARM Cortex-M series focusing on RTOS and memory efficiency.",
      icon: <FaMicrochip className="text-purple-400" />,
      features: ["RTOS Scheduling", "DMA Management", "Interrupt Handling"],
      status: "In Development",
      accent: "border-purple-500/20"
    },
    {
      title: "Circuit Design",
      slug: "circuits",
      description: "High-speed PCB layout and multilayer hardware design with signal integrity analysis and EMI shielding.",
      icon: <FaProjectDiagram className="text-amber-400" />,
      features: ["Multilayer PCB", "BOM Optimization", "Signal Integrity"],
      status: "Beta Testing",
      accent: "border-amber-500/20"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 text-purple-500 font-bold text-xs uppercase tracking-widest mb-4">
            <FaMicrochip /> Hardware Lab
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            Electronics <span className="text-zinc-500 italic">Hub</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
            Explore advanced hardware engineering. Each project below is integrated with 
            custom **Firmware**, **PCB Layouts**, and seamless **Cloud Synchronization**.
          </p>
        </header>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div 
              key={project.slug} 
              className={`group relative overflow-hidden bg-zinc-900/40 border ${project.accent} rounded-[2rem] p-8 md:p-12 transition-all hover:bg-zinc-900/60`}
            >
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                
                <div className="shrink-0 w-20 h-20 rounded-3xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
                    <span className="px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-zinc-400 mb-6 max-w-2xl">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.features.map((feature) => (
                      <span key={feature} className="text-[10px] font-bold px-3 py-1 bg-zinc-900 text-zinc-500 rounded-lg border border-zinc-800 uppercase tracking-tighter">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/tech/${project.slug}`}
                    className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-xl font-black uppercase text-xs hover:bg-purple-500 hover:text-white transition-all group/btn shadow-xl"
                  >
                    View Project Documentation 
                    <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity text-[12rem] rotate-12 pointer-events-none">
                {project.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Hardware / Firmware Note */}
        <footer className="mt-20 flex flex-col md:flex-row items-center justify-between p-10 rounded-3xl bg-purple-500/5 border border-purple-500/10 gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-zinc-900 text-purple-500">
              <FaCogs size={30} />
            </div>
            <div>
              <h4 className="font-bold text-xl uppercase tracking-tighter">Hardware Architecture</h4>
              <p className="text-zinc-500 text-sm">Industrial grade PCB design and firmware security protocols.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Controller</span>
              <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg font-mono text-xs text-blue-400 font-bold uppercase tracking-tighter">ESP32 / AVR</div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Memory</span>
              <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg font-mono text-xs text-purple-400 font-bold uppercase tracking-tighter">SRAM / Flash</div>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}