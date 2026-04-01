'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // CHANGE 1: Added State
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close menu when clicking a link
  useEffect(() => setIsOpen(false), [pathname]);

  const isHomePage = pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-[100] px-8 py-8 pointer-events-none">
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 pointer-events-auto ${scrolled ? 'translate-y-[-10px]' : ''}`}>
        
        {/* LOGO: Vault.sys */}
        <Link href="/" className="mix-blend-lighten group z-[110]">
          <span className="text-white font-black tracking-tighter text-2xl uppercase">
            Vault<span className="text-indigo-400/50 italic font-light lowercase group-hover:text-indigo-400 transition-colors duration-300">.sys</span>
          </span>
        </Link>

        {/* NAVIGATION HUB: (CHANGE 2: Added 'hidden md:flex') */}
        <div className="hidden md:flex items-center gap-1 bg-[#161F2E]/80 backdrop-blur-2xl border border-white/10 p-1.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {!isHomePage && (
            <Link 
              href="/" 
              className="px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 rounded-full hover:bg-indigo-500/30 transition-all duration-300"
            >
              Home
            </Link>
          )}
          
          <NavLink href="/mission" label="Protocol" />
          <NavLink href="/management" label="Software" />
          <NavLink href="/electronics" label="Hardware" />
          <NavLink href="/teams" label="Engineers" />
          
          <Link href="/collaborate">
            <button className="ml-4 px-8 py-2 bg-indigo-600 text-[10px] font-black text-white uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-lg shadow-indigo-500/20 active:scale-95">
              Collaborate
            </button>
          </Link>
        </div>

        {/* CHANGE 3: Added Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[110] flex flex-col gap-1.5 p-4 bg-[#161F2E]/90 border border-white/10 rounded-full backdrop-blur-xl"
        >
          <div className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></div>
          <div className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></div>
          <div className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></div>
        </button>

        {/* CHANGE 4: Added Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0B121E] z-[100] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
          <div className="flex flex-col gap-8 text-center">
            <Link href="/mission" className="text-4xl font-black text-white uppercase tracking-tighter">Protocol</Link>
            <Link href="/management" className="text-4xl font-black text-white uppercase tracking-tighter">Software</Link>
            <Link href="/electronics" className="text-4xl font-black text-white uppercase tracking-tighter">Hardware</Link>
            <Link href="/teams" className="text-4xl font-black text-white uppercase tracking-tighter">Engineers</Link>
            <Link href="/collaborate" className="mt-4 px-10 py-4 bg-indigo-600 text-white font-black uppercase text-xs tracking-widest rounded-full">Collaborate</Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

// Your existing NavLink component
function NavLink({ href, label }: { href: string, label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 rounded-full ${
        isActive 
          ? 'text-white bg-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]' 
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {label}
    </Link>
  );
}