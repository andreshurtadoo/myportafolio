import React from 'react';
import { EARLY_PROJECTS } from '../constants';

const EarlyProjects: React.FC = () => {
  return (
    <section className="relative flex w-full flex-row overflow-hidden border-t border-white/5 bg-[#101922]">
      {/* Timeline Track (Left Side) */}
      <div className="hidden lg:flex flex-col items-center w-[calc(50vw-420px)] xl:w-[calc(50vw-620px)] flex-none h-auto relative z-10">
        {/* We need to position the line relative to the container */}
        <div className="absolute right-10 top-0 bottom-0 w-[2px] bg-[#233342]">
          <div className="sticky top-1/2 -translate-y-1/2 -translate-x-[7px] z-20">
             <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(19,127,236,0.6)] ring-4 ring-[#101922]"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-20 lg:ml-[80px]">
        {/* Header & Narrative */}
        <div className="flex flex-col max-w-4xl mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-2 md:hidden">
            <span className="material-symbols-outlined text-primary text-xl">circle</span>
            <span className="text-sm font-bold tracking-widest uppercase text-primary">Timeline</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4 font-display text-white">
            The Beginning <span className="text-slate-600 font-normal">(Early 2021)</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Where it all started. Building static pages, wrestling with CSS grid, and the first lines of JavaScript logic. These projects represent the foundation of my engineering journey—messy code, big ambitions, and a lot of learning.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full group/carousel">
          <div className="flex overflow-x-auto gap-6 pb-8 pt-2 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth">
            {EARLY_PROJECTS.map((project) => (
              <div key={project.id} className="flex-none snap-center w-[300px] md:w-[400px] flex flex-col gap-4 rounded-xl bg-surface-dark shadow-lg border border-slate-800 transition-transform duration-300 hover:-translate-y-2">
                <div 
                  className="w-full aspect-video bg-cover bg-center rounded-t-xl relative overflow-hidden group/card"
                  style={{ backgroundImage: `url('${project.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/0 transition-colors"></div>
                </div>
                <div className="flex flex-col flex-1 p-5 pt-1 gap-4">
                  <div>
                    <h3 className="text-xl font-bold leading-normal mb-1 font-display text-white">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-2 py-1 rounded bg-[#233342] text-xs font-medium text-[#92adc9]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="mt-auto pt-2">
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors">
                      <span className="material-symbols-outlined text-[18px]">code</span>
                      <span>View Project</span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
            
            {/* Archived Placeholder */}
            <div className="flex-none snap-center w-[300px] md:w-[400px] flex flex-col gap-4 rounded-xl bg-surface-dark shadow-lg border border-slate-800 opacity-60 hover:opacity-100 transition-opacity">
               <div className="w-full aspect-video bg-slate-800 rounded-t-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-slate-600">folder_off</span>
               </div>
               <div className="flex flex-col flex-1 p-5 pt-1 gap-4">
                  <h3 className="text-xl font-bold font-display text-white">Portfolio v1</h3>
                  <div className="mt-auto pt-2">
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#233648] text-white text-sm font-bold cursor-not-allowed">
                       <span>Archived</span>
                    </button>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Gradient Fade on Right */}
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#101922] to-transparent pointer-events-none hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default EarlyProjects;