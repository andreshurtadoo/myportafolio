import React from 'react';
import { COMMERCIAL_PROJECT } from '../constants';

const FeaturedProject: React.FC = () => {
  return (
    <section id="projects" className="relative w-full py-24 bg-[#101922] border-t border-[#233648] overflow-hidden">
      {/* Visual Timeline Line - Adjusted to match previous section alignment */}
      <div className="hidden md:block absolute left-[calc(15%-1px)] top-0 bottom-0 w-[1px] bg-[#233648] z-0"></div>

      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:pl-[18%] relative z-10">
         {/* Timeline Dot Indicator */}
         <div className="absolute -left-3 md:-left-[calc(3.5%+12px)] top-0 bottom-0 m-auto h-4 w-4 hidden md:flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-primary relative z-10 ring-4 ring-background-dark shadow-[0_0_15px_rgba(19,127,236,0.6)] animate-pulse"></div>
         </div>

         <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
               <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-surface-dark border border-[#233648] text-primary text-xs font-bold uppercase tracking-wider shadow-sm">
                     Professional Growth • 2024
                  </span>
                  <span className="h-px w-8 bg-[#233648]"></span>
               </div>
               
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-[1.1] tracking-tight">
                  First Sold Project: <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">{COMMERCIAL_PROJECT.title}</span>
               </h1>
               
               <p className="text-slate-400 text-base md:text-lg leading-relaxed font-body max-w-lg">
                  {COMMERCIAL_PROJECT.description}
               </p>

               <div className="space-y-3 pt-2">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {COMMERCIAL_PROJECT.tech.map(t => (
                       <div key={t} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a2632] border border-[#233648] hover:border-primary/50 transition-colors cursor-default group">
                          <span className="w-2 h-2 rounded-full" style={{backgroundColor: t === 'React' ? '#61DAFB' : t === 'Stripe' ? '#635BFF' : '#3178C6'}}></span>
                          <span className="text-slate-300 text-sm font-medium group-hover:text-white">{t}</span>
                       </div>
                    ))}
                  </div>
               </div>

               <div className="pt-4 flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5">
                     <span>View Case Study</span>
                     <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                  <button className="flex items-center gap-2 bg-transparent hover:bg-white/5 text-white border border-[#233648] px-6 py-3 rounded-lg font-bold transition-all">
                     <span>Visit Live Site</span>
                     <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </button>
               </div>
            </div>

            {/* Right Column: Visuals & Stats */}
            <div className="lg:col-span-7 relative group perspective-1000">
               <div className="relative bg-surface-dark border border-[#233648] rounded-2xl p-2 shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.01]">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#233648] bg-[#111a22]">
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                     </div>
                     <div className="mx-auto bg-[#1a2632] px-3 py-1 rounded text-[10px] text-slate-500 font-mono">
                        logiflow-app.com/dashboard/analytics
                     </div>
                  </div>

                  {/* Project Mockup */}
                  <div className="relative w-full h-[300px] md:h-[400px] bg-[#0d141c] overflow-hidden">
                     <img 
                        src={COMMERCIAL_PROJECT.image} 
                        alt="Dashboard" 
                        className="w-full h-full object-cover opacity-80 mix-blend-overlay" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1a2632] via-transparent to-transparent"></div>
                     
                     {/* Floating UI Metrics */}
                     <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-[#111a22]/90 backdrop-blur-md border border-primary/30 p-4 rounded-xl shadow-lg relative overflow-hidden group/card hover:border-primary/60 transition-colors">
                           <div className="absolute top-0 right-0 p-2 opacity-50">
                              <span className="material-symbols-outlined text-primary">trending_up</span>
                           </div>
                           <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Total Active Users</p>
                           <div className="flex items-baseline gap-2">
                              <p className="text-3xl font-bold text-white tracking-tight">{COMMERCIAL_PROJECT.stats.users}</p>
                              <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center">
                                 <span className="material-symbols-outlined text-[10px] mr-0.5">arrow_upward</span>{COMMERCIAL_PROJECT.stats.growth}
                              </span>
                           </div>
                           <div className="h-1 w-full bg-slate-800 rounded-full mt-3 overflow-hidden">
                              <div className="h-full bg-primary w-[75%]"></div>
                           </div>
                        </div>

                        <div className="bg-[#111a22]/80 backdrop-blur-md border border-[#233648] p-4 rounded-xl shadow-lg hidden md:block hover:border-slate-600 transition-colors">
                            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Revenue</p>
                            <p className="text-2xl font-bold text-white tracking-tight">{COMMERCIAL_PROJECT.stats.revenue}</p>
                            <div className="h-1 w-full bg-slate-800 rounded-full mt-4 overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[45%]"></div>
                            </div>
                        </div>

                        <div className="bg-[#111a22]/80 backdrop-blur-md border border-[#233648] p-4 rounded-xl shadow-lg hidden md:block hover:border-slate-600 transition-colors">
                             <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Uptime</p>
                             <p className="text-2xl font-bold text-white tracking-tight">{COMMERCIAL_PROJECT.stats.uptime}</p>
                             <div className="h-1 w-full bg-slate-800 rounded-full mt-4 overflow-hidden">
                                 <div className="h-full bg-emerald-500 w-[99%]"></div>
                             </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Glow effect */}
               <div className="absolute -inset-4 bg-primary/20 blur-2xl -z-10 rounded-[3rem] opacity-40"></div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default FeaturedProject;