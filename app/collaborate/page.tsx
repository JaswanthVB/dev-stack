'use client';

export default function CollaboratePage() {
  const myEmail = "jaswanthvarmabolisetty@gmail.com";
  const subject = "Project Inquiry: Protocol Handshake";
  const body = "Hello Jaswanth, \n\n[Describe your project or inquiry here]";

  // This function forces the browser to open Gmail Web instead of a local app like Outlook
  const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <main className="relative min-h-screen bg-[#0B121E] text-slate-400 overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-10 pt-48 pb-32">
        
        <header className="mb-24 border-l border-indigo-500/30 pl-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.6em]">Protocol 04 // Handshake</span>
            <div className="h-[1px] w-20 bg-white/10"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 uppercase leading-none">
            Direct <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-indigo-200">Transmission.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl font-medium leading-relaxed uppercase text-[12px] tracking-widest">
            Establishing a direct link via Gmail. This will bypass your local system defaults and open a secure compose window in a new tab.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* THE BIG BUTTON */}
          <button 
            onClick={openGmail}
            className="group relative flex items-center justify-center py-10 bg-white rounded-[40px] transition-all hover:bg-indigo-600 active:scale-95 shadow-2xl w-full"
          >
            <div className="text-center">
              <span className="block text-[#0B121E] group-hover:text-white font-black uppercase text-[14px] tracking-[0.6em] mb-2">
                Compose in Gmail
              </span>
              <span className="text-[#0B121E]/40 group-hover:text-white/40 font-mono text-[9px] uppercase tracking-widest">
                {myEmail}
              </span>
            </div>
          </button>

          {/* SYSTEM INFO */}
          <div className="space-y-8 pl-6 border-l border-white/5">
            <div>
              <h4 className="text-white font-black uppercase tracking-tighter text-sm mb-2">Manual Link</h4>
              <p className="text-slate-500 text-[11px] font-mono tracking-widest">
                jaswanthvarmabolisetty@gmail.com
              </p>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-tighter text-sm mb-2">Location Node</h4>
              <p className="text-slate-500 text-[11px] font-mono tracking-widest uppercase">
                HYDERABAD, IN // UTC+5:30
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-32 opacity-10 text-[10px] font-black uppercase tracking-[2em]">
           GMAIL_COMPOSE_ACTIVE
        </footer>
      </div>
    </main>
  );
}