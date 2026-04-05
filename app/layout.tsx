import './globals.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

export const metadata = {
  title: 'Vault.sys | Systems Architecture',
  description: 'High-integrity software ecosystems and industrial hardware telemetry by Jaswanth Varma Bolisetty.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0B121E] text-slate-200 antialiased overflow-x-hidden min-h-screen relative">
        
        {/* --- TACTICAL ATMOSPHERE LAYERS --- */}
        {/* Fixed background grid that pulses */}
        <div className="vault-grid fixed inset-0 z-[-1]" />
        
        {/* CRT Scanline effect moving vertically */}
        <div className="vault-scanline fixed inset-0 z-[998] pointer-events-none" />
        
        {/* Corner darkening for hardware-screen feel */}
        <div className="vault-vignette fixed inset-0 z-[997] pointer-events-none" />
        
        {/* --- SYSTEM COMPONENTS --- */}
        <CustomCursor />
        
        <Navbar />
        
        {/* --- PAGE CONTENT --- */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Optional: Global System Status (Fixed Bottom Left) */}
        <div className="fixed bottom-6 left-8 z-[100] hidden md:block">
          <div className="flex items-center gap-3 font-mono text-[8px] tracking-[0.3em] text-indigo-500/50 uppercase">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
            System_Live // Terminal_Ready
          </div>
        </div>

      </body>
    </html>
  );
}