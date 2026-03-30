'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  FaChevronDown, FaDatabase, FaMicrochip, FaHospital, 
  FaUtensils, FaSchool, FaCode, FaServer, FaCogs,
  FaUserShield, FaSignOutAlt 
} from 'react-icons/fa';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Check if admin is logged in
    const token = localStorage.getItem('adminToken');
    setIsLoggedIn(!!token);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
    window.location.href = '/'; 
  };

  const managementSystems = [
    { name: 'School Portal', href: '/web/school', icon: <FaSchool className="text-blue-400" /> },
    { name: 'Hospital HMS', href: '/web/hospital', icon: <FaHospital className="text-rose-400" /> },
    { name: 'Restaurant POS', href: '/web/restaurant', icon: <FaUtensils className="text-orange-400" /> },
  ];

  const electronicsProjects = [
    { name: 'IoT Control', href: '/tech/iot', icon: <FaCogs className="text-emerald-400" /> },
    { name: 'Embedded Systems', href: '/tech/embedded', icon: <FaMicrochip className="text-purple-400" /> },
    { name: 'Circuit Design', href: '/tech/circuits', icon: <FaServer className="text-amber-400" /> },
  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-zinc-950/90 backdrop-blur-xl border-zinc-800/50 py-3 shadow-2xl' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-zinc-900 p-2 rounded-lg border border-zinc-700">
              <FaDatabase size={20} className="text-blue-500" />
            </div>
          </div>
          <span className="text-zinc-100 font-black text-xl uppercase tracking-tighter">
            Dev<span className="text-emerald-500">Stack</span>
          </span>
        </Link>

        {/* Navigation - THE MISSION, MANAGEMENT, ELECTRONICS LINKS */}
        <div className="hidden lg:flex items-center gap-2">
          <NavLink href="/" label="Home" />
          <NavLink href="/mission" label="Our Aim" />
          
          <NavDropdown 
            label="Management" 
            isOpen={activeDropdown === 'web'} 
            onClick={() => setActiveDropdown(activeDropdown === 'web' ? null : 'web')}
            items={managementSystems}
            footerLabel="View Management Hub"
            footerHref="/management" 
          />

          <NavDropdown 
            label="Electronics" 
            isOpen={activeDropdown === 'hardware'} 
            onClick={() => setActiveDropdown(activeDropdown === 'hardware' ? null : 'hardware')}
            items={electronicsProjects}
            footerLabel="View Electronics Hub"
            footerHref="/electronics" 
          />

          <NavLink href="/teams" label="Developers" />
        </div>

        {/* Right Side UI: Account Toggle */}
        <div className="flex items-center gap-4">
          {isLoggedIn === null ? (
            <div className="w-10 h-10 bg-zinc-900 rounded-xl animate-pulse" />
          ) : isLoggedIn ? (
            <div className="flex items-center gap-3 pl-4 border-l border-zinc-800">
              <div className="flex flex-col items-end hidden md:flex">
                <span className="text-[10px] font-black text-white uppercase tracking-tighter">Master Admin</span>
                <button onClick={handleLogout} className="text-[9px] text-rose-500 font-bold uppercase hover:underline">Sign Out</button>
              </div>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-emerald-500">
                <FaUserShield size={18} />
              </div>
            </div>
          ) : (
            <Link href="/admin">
              <button className="bg-white text-black px-5 py-2 rounded-lg text-xs font-black uppercase hover:bg-emerald-500 hover:text-white transition-all transform active:scale-95 shadow-lg">
                Collaborate
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

// Sub-components
function NavLink({ href, label }: { href: string, label: string }) {
  return (
    <Link href={href} className="px-4 py-2 text-zinc-400 hover:text-zinc-100 text-sm font-semibold transition-colors">
      {label}
    </Link>
  );
}

function NavDropdown({ label, isOpen, onClick, items, footerLabel, footerHref }: any) {
  return (
    <div className="relative">
      <button 
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
          isOpen ? 'text-white bg-zinc-800/50' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
        }`}
      >
        {label}
        <FaChevronDown size={10} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-[calc(100%+15px)] right-0 w-72 bg-zinc-900 border border-zinc-800 rounded-2xl p-2 shadow-2xl">
          {items.map((item: any) => (
            <Link key={item.name} href={item.href} className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-800 group transition-all">
              <div className="bg-zinc-950 p-2 rounded-lg">{item.icon}</div>
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{item.name}</span>
            </Link>
          ))}
          <div className="mt-2 p-2 border-t border-zinc-800/50 text-center">
            <Link href={footerHref} className="text-[10px] font-bold text-zinc-500 hover:text-emerald-500 uppercase tracking-widest">
              {footerLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}