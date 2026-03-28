'use client';

import Link from 'next/link';
import { 
  FaHospital, 
  FaUtensils, 
  FaSchool, 
  FaMicrochip, 
  FaArrowRight, 
  FaGithub, 
  FaLinkedin, 
  FaDiscord, 
  FaEnvelope, 
  FaCodeBranch 
} from 'react-icons/fa';


export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase">
            Powered by Flask & Postgres
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            THE PROJECT VAULT
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A centralized ecosystem housing professional management systems, 
            web architectures, and advanced electronics engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              Explore Projects
            </button>
            <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-bold rounded-xl transition-all">
              Watch Demo
            </button>
          </div>
        </section>

        {/* BENTO GRID SECTOR SELECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Management */}
          <div className="md:col-span-2 group relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaSchool size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaSchool className="text-blue-500" /> Web Management
            </h3>
            <p className="text-zinc-400 mb-6 max-w-md">
              High-performance systems for Schools, Hospitals, and Restaurants 
              integrated with real-time database management.
            </p>
            <Link href="/projects/web" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:gap-4 transition-all">
              Browse Software <FaArrowRight />
            </Link>
          </div>

          {/* Card 2: Electronics */}
          <div className="group relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-all overflow-hidden">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaMicrochip className="text-emerald-500" /> Hardware
            </h3>
            <p className="text-zinc-400 mb-6">
              Embedded systems and IoT solutions powered by custom circuits.
            </p>
            <Link href="/products/embedded" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:gap-4 transition-all">
              View Gear <FaArrowRight />
            </Link>
          </div>

          {/* Small Feature Cards */}
          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
            <div className="p-3 bg-red-500/10 rounded-xl text-red-500"><FaHospital size={24} /></div>
            <div>
              <div className="font-bold">Hospital HMS</div>
              <div className="text-xs text-zinc-500">Live Database Sync</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
            <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500"><FaUtensils size={24} /></div>
            <div>
              <div className="font-bold">Restaurant POS</div>
              <div className="text-xs text-zinc-500">Cloud Inventory</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500"><FaMicrochip size={24} /></div>
            <div>
              <div className="font-bold">IoT Dashboard</div>
              <div className="text-xs text-zinc-500">Device Monitoring</div>
            </div>
          </div>
        </div>

        {/* DEVELOPER & CONTACT SECTION - Now inside the max-w container */}
        <section className="mt-32 pt-16 border-t border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* About Me Card */}
            <div className="lg:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">The Developer</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                I&apos;m Jaswanth Varma Bolisetty,s a Full-Stack Developer and Electronics enthusiast specializing in building 
                scalable management systems and IoT solutions. Currently architecting a 
                centralized hub using <span className="text-blue-400">Next.js</span>, 
                <span className="text-emerald-400"> Flask</span>, and 
                <span className="text-purple-400"> Postgres</span>.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                <span className="flex items-center gap-1"><FaCodeBranch /> Open to Collabs</span>
                <span className="flex items-center gap-1"><FaCodeBranch /> Hardware Prototyping</span>
              </div>
            </div>

            {/* Social & Contact Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-white transition-all group">
                <FaGithub size={28} className="group-hover:scale-110 transition-transform" />
                <span className="text-[10px] mt-2 font-bold uppercase text-zinc-500">Github</span>
              </a>

              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition-all group">
                <FaLinkedin size={28} className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] mt-2 font-bold uppercase text-zinc-500">LinkedIn</span>
              </a>

              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500 transition-all group">
                <FaDiscord size={28} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] mt-2 font-bold uppercase text-zinc-500">Discord</span>
              </a>

              <a href="mailto:jaswanthvarmabolisetty@gmail.com" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all group">
                <FaEnvelope size={28} className="group-hover:rotate-12 transition-transform" />
                <span className="text-[10px] mt-2 font-black uppercase">Email</span>
              </a>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="mt-20 text-center">
            <p className="text-zinc-600 text-[10px] font-medium tracking-[0.2em] uppercase">
              © 2026 DevStack Vault • Built with Passion
              This is built by Jaswanth Varma Bolisetty
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}