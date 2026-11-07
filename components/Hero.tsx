import React from 'react';
import { HERO_IMAGE } from '../constants';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative flex flex-col justify-center w-full pt-32 pb-20 min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="px-6 md:px-10 lg:px-20 w-full max-w-[1400px] mx-auto h-full flex flex-col">
        <div className="flex-1 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 py-10 lg:py-0">
          
          {/* Left: Typography & Bio */}
          <div className="flex-1 flex flex-col justify-center items-start z-10 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Available for work</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-4">
              Building digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-secondary">experiences</span> that matter.
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-6 font-display">
              Full Stack Engineer & System Architect 
            </h2>

            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10 font-body">
              I’m Andres, an engineer specializing in scalable backend systems and intuitive frontend interactions. I bridge the gap between complex logic and clean design.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="group flex items-center justify-center gap-2 h-12 px-6 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold transition-all shadow-lg shadow-primary/25">
                <span>Contact Me</span>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <a href="#projects" className="flex items-center justify-center h-12 px-6 bg-surface-dark hover:bg-white/5 border border-white/10 text-white rounded-lg font-bold transition-all">
                View Projects
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="flex-1 w-full flex justify-center lg:justify-end items-center relative z-10">
            <div className="relative w-full max-w-[400px] aspect-[4/5] lg:aspect-square">
              {/* Image Frame/Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-3 scale-105"></div>
              
              {/* Main Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface-dark group">
                <img 
                  src={HERO_IMAGE} 
                  alt="Andres Hurtado Portrait" 
                  className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>

              {/* Decorative Code Snippet Card */}
              <div className="absolute -bottom-6 -left-6 bg-[#1e2936]/90 backdrop-blur-sm border border-white/10 p-4 rounded-xl shadow-xl hidden sm:block animate-pulse-slow">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-blue-300">
                  <span className="text-purple-400">const</span> <span className="text-yellow-200">innovate</span> = () ={'>'} {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-green-300">"future"</span>;<br/>
                  {'}'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Start Indicator */}
        <div className="relative w-full flex flex-col items-center lg:items-start pb-0 z-10 mt-12">
            <div className="grid grid-cols-[40px_1fr] gap-x-4 w-full max-w-[960px] lg:mx-0">
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center size-10 rounded-full border border-primary/50 text-primary bg-primary/10 shadow-[0_0_15px_rgba(19,127,236,0.3)]">
                        <span className="material-symbols-outlined text-[20px]">flag</span>
                    </div>
                    {/* Vertical Line growing downwards */}
                    <div className="w-[2px] h-20 bg-gradient-to-b from-primary to-[#233342] rounded-full"></div>
                </div>
                <div className="flex flex-col pt-1">
                    <p className="text-white text-lg font-bold">The Journey Begins</p>
                    <p className="text-text-secondary text-sm font-body">Scroll to explore my professional timeline</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;