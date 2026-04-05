'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 1. Move these completely outside the component function
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-x-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-48 pb-32">
        
        {/* HEADER */}
        <motion.header 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-24 border-l border-blue-500/30 pl-10"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 uppercase leading-none">
            Electronics <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-900/50">Lab.</span>
          </h1>
        </motion.header>

        {/* PROJECTS GRID */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 gap-6"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.slug} 
              variants={fadeUp}
              className="group relative bg-white/[0.02] border border-white/5 rounded-[32px] p-10 md:p-14 overflow-hidden transition-colors hover:bg-white/[0.04]"
            >
              <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
                <div className="flex-grow">
                  <span className="text-[10px] font-black text-blue-400 font-mono tracking-widest border border-blue-400/20 px-3 py-1 rounded mb-6 inline-block">
                    {project.id}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                    {project.title}
                  </h2>
                  <p className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.features.map((f) => (
                      <span key={f} className="text-[9px] font-black px-4 py-2 bg-blue-500/5 text-slate-500 rounded-full border border-white/5 uppercase tracking-widest">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end shrink-0 md:pl-16 md:border-l border-white/5">
                  <div className="text-right">
                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] mb-2">Core</p>
                    <p className="text-white font-bold tracking-widest uppercase">{project.spec}</p>
                  </div>
                  <div className="mt-12">
                    <div className="px-10 py-4 bg-white/5 text-slate-600 rounded-full font-black uppercase text-[9px] tracking-[0.3em] border border-white/5 italic">
                       In Development
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}