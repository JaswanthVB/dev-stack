'use client';

import { 
  FaSchool, 
  FaHospital, 
  FaUtensils, 
  FaArrowRight, 
  FaDatabase, 
  FaShieldAlt,
  FaServer
} from 'react-icons/fa';
import Link from 'next/link';

export default function ManagementPage() {
  
  const systems = [
    {
      title: "School ERP",
      slug: "school",
      description: "A comprehensive platform for student enrollment, faculty management, and automated grading systems.",
      icon: <FaSchool className="text-blue-400" />,
      features: ["Student Portal", "Attendance Tracking", "Fee Management"],
      status: "Operational",
      accent: "border-blue-500/20"
    },
    {
      title: "Hospital HMS",
      slug: "hospital",
      description: "Advanced healthcare administration featuring digital patient records and doctor-patient scheduling.",
      icon: <FaHospital className="text-rose-400" />,
      features: ["EMR Integration", "Appointment Engine", "Pharmacy Inventory"],
      status: "In Development",
      accent: "border-rose-500/20"
    },
    {
      title: "Restaurant POS",
      slug: "restaurant",
      description: "Real-time hospitality management with digital menu synchronization and kitchen order analytics.",
      icon: <FaUtensils className="text-orange-400" />,
      features: ["Live Order Sync", "Table Management", "Revenue Analytics"],
      status: "Beta Testing",
      accent: "border-orange-500/20"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 text-emerald-500 font-bold text-xs uppercase tracking-widest mb-4">
            <FaServer /> System Registry
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            Management <span className="text-zinc-500 italic">Central</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
            Access and manage multi-tenant architectures. Each system below is architected with a 
            centralized **Flask API** and high-availability **PostgreSQL** clusters.
          </p>
        </header>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 gap-8">
          {systems.map((system) => (
            <div 
              key={system.slug} 
              className={`group relative overflow-hidden bg-zinc-900/40 border ${system.accent} rounded-[2rem] p-8 md:p-12 transition-all hover:bg-zinc-900/60`}
            >
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                
                {/* Visual Icon Section */}
                <div className="shrink-0 w-20 h-20 rounded-3xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  {system.icon}
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    <h2 className="text-3xl font-bold tracking-tight">{system.title}</h2>
                    <span className="px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                      {system.status}
                    </span>
                  </div>
                  <p className="text-zinc-400 mb-6 max-w-2xl">{system.description}</p>
                  
                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {system.features.map((feature) => (
                      <span key={feature} className="text-[10px] font-bold px-3 py-1 bg-zinc-900 text-zinc-500 rounded-lg border border-zinc-800 uppercase tracking-tighter">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/web/${system.slug}`}
                    className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-xl font-black uppercase text-xs hover:bg-emerald-500 hover:text-white transition-all group/btn shadow-xl"
                  >
                    Enter Management Interface 
                    <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Decorative Background Icon */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity text-[12rem] rotate-12 pointer-events-none">
                {system.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Security / Backend Note */}
        <footer className="mt-20 flex flex-col md:flex-row items-center justify-between p-10 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-zinc-900 text-emerald-500">
              <FaShieldAlt size={30} />
            </div>
            <div>
              <h4 className="font-bold text-xl uppercase tracking-tighter">Enterprise Security</h4>
              <p className="text-zinc-500 text-sm">All management portals are protected by JWT authentication and SSL encryption.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Database</span>
              <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg font-mono text-xs text-blue-400 font-bold uppercase tracking-tighter">Postgres 16</div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">API Layer</span>
              <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg font-mono text-xs text-emerald-400 font-bold uppercase tracking-tighter">Flask 3.0</div>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}