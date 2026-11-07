import React from 'react';
import { ACADEMIC_PROJECTS } from '../constants';

const Academic: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-row bg-[#101922]">
      {/* Vertical Timeline Rail (Left) */}
      <aside className="hidden md:flex w-[15%] min-w-[120px] max-w-[200px] flex-col items-center border-r border-[#233648] py-10 relative z-10 bg-[#101922]">
        <div className="sticky top-20 flex flex-col items-center h-[calc(100vh-160px)] w-[inherit]">
          {/* Top anchor: Profile */}
          <div className="mb-12">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-12 border-2 border-[#233648]"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzRPVJiLoueuF5GyK8FE7iRcuitBP7HLdFqEsIns7gfTQfZskvVCIk9ApvjvFoy8UI-xN4WCvFH93T72EXEcMhuLBUGB6yV_KKCcgPrfssqrSAX8F8SVviZ8CZmgRT8IfHn8r2XUZq84-krAHsqSsesLRxszzFk1E5Y-RXXFTf1spVikJY-7q-5J9xZhsw5S2WX5FSe39Dx-xsIEfj9qoHaDn8pJAxJRShDBoyIYv70w17sufMhYCPU-OzlSmkMK2ZRiRJiO1og8w")' }}
            ></div>
          </div>
          
          {/* Timeline Line */}
          <div className="flex-1 w-px bg-gradient-to-b from-[#233648]/20 via-[#233648] to-[#233648]/20 relative">
            
            {/* 2024 Present Marker */}
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex items-center gap-4">
               <div className="size-3 rounded-full bg-[#233648]"></div>
               <span className="absolute left-6 text-xs text-[#586e84] whitespace-nowrap font-mono">2024 - Present</span>
            </div>

            {/* Current Active Marker */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 flex items-center">
              <div className="absolute size-6 rounded-full bg-primary/20 animate-pulse"></div>
              <div className="size-3.5 rounded-full bg-primary ring-4 ring-[#101922] z-10"></div>
              <div className="absolute left-8 flex flex-col justify-center">
                 <span className="text-primary text-sm font-bold font-mono whitespace-nowrap">2019 - 2023</span>
                 <span className="text-xs text-[#92adc9] whitespace-nowrap">B.S. Comp Sci</span>
              </div>
            </div>

            {/* Past Marker */}
             <div className="absolute top-[75%] left-1/2 -translate-x-1/2 flex items-center gap-4">
               <div className="size-2 rounded-full bg-[#233648]"></div>
            </div>
          </div>

          <div className="mt-12 text-[#233648]">
            <span className="material-symbols-outlined text-3xl">expand_more</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative py-10 px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-[1200px] mx-auto mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-primary text-3xl">school</span>
            <h2 className="text-white text-3xl md:text-4xl font-bold font-display leading-tight tracking-[-0.015em]">Academic Deep-Dive</h2>
          </div>
          <p className="text-[#92adc9] text-base md:text-lg font-normal leading-relaxed max-w-2xl border-l-2 border-[#233648] pl-4 mt-4">
             Key research and engineering milestones during B.S. in Computer Science. Focusing on distributed systems, compiler design, and machine learning fundamentals.
          </p>
        </div>

        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACADEMIC_PROJECTS.map((project) => (
             <div key={project.id} className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-[#233648] hover:border-primary transition-colors duration-300">
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <span className="material-symbols-outlined">
                          {project.id === 'dfs' ? 'dns' : project.id === 'compiler' ? 'code_blocks' : project.id === 'nn' ? 'neurology' : 'forum'}
                        </span>
                     </div>
                     <a href="#" className="text-[#92adc9] hover:text-white transition-colors">
                        <span className="material-symbols-outlined">open_in_new</span>
                     </a>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors font-display">
                    {project.title}
                  </h3>
                  <div className="mb-6 flex-grow">
                     <p className="text-[#92adc9] text-sm leading-relaxed">
                       {project.description}
                     </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-[#233648]">
                     <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="px-3 py-1 rounded-md bg-[#233648] text-xs font-mono text-white border border-[#344a61]">{t}</span>
                        ))}
                     </div>
                     <button className="flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors">
                         View Repo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                     </button>
                  </div>
                </div>
             </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Academic;