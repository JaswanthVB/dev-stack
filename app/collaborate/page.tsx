'use client';

export default function CollaboratePage() {
  const myEmail = "jaswanthvarmabolisetty@gmail.com";
  const subject = "Project Inquiry: Protocol Handshake";
  const body = "Hello Jaswanth, \n\n[Describe your project or inquiry here]";

  const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-x-hidden selection:bg-indigo-500/40">
      
      {/* BACKGROUND DECORATION (Universal scaling) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-5%] left-[-10%] w-[120%] md:w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 pt-32 md:pt-48 pb-20 md:pb-32">
        
        {/* HEADER SECTION - Fluid Typography */}
        <header className="mb-16 md:mb-24 border-l border-indigo-500/30 pl-6 md:pl-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[8px] md:text-[9px] font-black text-indigo-500 uppercase tracking-[0.4em] md:tracking-[0.6em] whitespace-nowrap">Protocol 04 // Handshake</span>
            <div className="h-[1px] w-12 md:w-20 bg-white/10"></div>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white mb-6 md:mb-8 uppercase leading-[0.9] md:leading-none transition-all">
            Direct <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-indigo-200">Transmission.</span>
          </h1>
          <p className="text-slate-400 text-[10px] md:text-sm max-w-xl font-medium leading-relaxed uppercase tracking-[0.1em] md:tracking-widest">
            Establishing a direct link via Gmail. This will bypass your local system defaults and open a secure compose window in a new tab.
          </p>
        </header>

        {/* INTERACTION GRID (1-col on mobile, 2-col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* THE BIG BUTTON - Massive touch target for mobile */}
          <button 
            onClick={openGmail}
            className="group relative flex items-center justify-center py-10 md:py-12 bg-white rounded-[32px] md:rounded-[40px] transition-all hover:bg-indigo-600 active:scale-95 shadow-2xl w-full overflow-hidden"
          >
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="text-center relative z-10">
              <span className="block text-[#0B121E] group-hover:text-white font-black uppercase text-[12px] md:text-[14px] tracking-[0.4em] md:tracking-[0.6em] mb-2 transition-colors">
                Compose in Gmail
              </span>
              <span className="text-[#0B121E]/40 group-hover:text-white/40 font-mono text-[8px] md:text-[9px] uppercase tracking-widest transition-colors break-all px-4">
                {myEmail}
              </span>
            </div>
          </button>

          {/* SYSTEM INFO - Stacks nicely below on mobile */}
          <div className="space-y-6 md:space-y-8 pl-6 md:pl-8 border-l border-white/5">
            <div className="group cursor-default">
              <h4 className="text-white font-black uppercase tracking-tighter text-xs md:text-sm mb-2 group-hover:text-indigo-400 transition-colors">Manual Link</h4>
              <p className="text-slate-500 text-[9px] md:text-[11px] font-mono tracking-widest break-all">
                jaswanthvarmabolisetty@gmail.com
              </p>
            </div>
            <div className="group cursor-default">
              <h4 className="text-white font-black uppercase tracking-tighter text-xs md:text-sm mb-2 group-hover:text-indigo-400 transition-colors">Location Node</h4>
              <p className="text-slate-500 text-[9px] md:text-[11px] font-mono tracking-widest uppercase">
                HYDERABAD, IN // UTC+5:30
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER IDENTITY */}
        <footer className="mt-24 md:mt-32 opacity-10 text-center md:text-left overflow-hidden">
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[1em] md:tracking-[2em] whitespace-nowrap">
              GMAIL_COMPOSE_ACTIVE // SOLID_STATE_LINK
            </span>
        </footer>
      </div>
    </main>
  );
}