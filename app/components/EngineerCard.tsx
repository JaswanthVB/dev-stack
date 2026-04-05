'use client';
import { motion } from 'framer-motion';

export default function EngineerCard({ name, role, id }: { name: string, role: string, id: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group bg-[#161F2E]/50 border border-white/5 p-6 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-700"
    >
      {/* 1. MOVING SCAN BAR */}
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-indigo-500/20 shadow-[0_0_15px_indigo] z-20 pointer-events-none"
      />

      {/* 2. THE RADAR AVATAR */}
      <div className="relative w-full h-48 bg-black/40 mb-6 rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
         {/* Circular Radar Pings */}
         <motion.div 
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-20 h-20 border border-indigo-500/30 rounded-full"
         />
         <span className="text-[10px] font-mono text-indigo-500/40 uppercase tracking-widest z-10">
           ID_{id}
         </span>
      </div>

      {/* 3. PERSONNEL DATA */}
      <div className="relative z-30">
        <h3 className="text-white font-black uppercase tracking-tighter text-2xl mb-1">{name}</h3>
        <p className="text-indigo-400 font-mono text-[10px] tracking-widest uppercase mb-6">{role}</p>
        
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[8px] text-slate-500 uppercase tracking-[0.3em]">Clearance</p>
            <p className="text-white font-mono text-xs">LVL_4_ADMIN</p>
          </div>
          <div className="text-right">
            <p className="text-[8px] text-slate-500 uppercase tracking-[0.3em]">Status</p>
            <p className="text-green-500 font-mono text-xs animate-pulse">● ONLINE</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}