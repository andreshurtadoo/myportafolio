import React from 'react';
import { LOGOS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative flex flex-col w-full bg-[#101922] pb-10">
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10">
        <div className="flex flex-row max-w-[1024px] flex-1 gap-6">
          
          {/* Timeline End Column */}
          <div className="flex flex-col items-center w-10 shrink-0 relative hidden md:flex">
             {/* Fading Line */}
             <div className="w-0.5 bg-gradient-to-b from-[#233648] to-primary/50 h-[100px] absolute top-0"></div>
             {/* Present Marker */}
             <div className="absolute top-[100px] z-10 bg-[#101922] p-1 rounded-full border-2 border-[#101922]">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
             </div>
          </div>

          <div className="flex flex-col flex-1 pb-10">
            {/* Header */}
            <div className="mb-10 pt-2 ml-0 md:ml-6">
               <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-2 font-display text-white">Trusted By</h2>
               <p className="text-slate-400 text-lg">Companies and teams I've had the pleasure of working with.</p>
            </div>

            {/* Logo Grid */}
            <div className="mb-20 ml-0 md:ml-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {LOGOS.map((logo, idx) => (
                  <div key={idx} className="group flex flex-col gap-3">
                    <div className="w-full aspect-[3/2] bg-white/5 rounded-xl border border-gray-800 flex items-center justify-center p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                       <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <img src={logo} alt="Company Logo" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* "Present Day" Label mobile alignment fix */}
            <div className="flex items-center gap-3 mb-10 ml-0 md:ml-[-14px] hidden md:flex">
               <div className="flex items-center gap-2">
                 <span className="text-primary font-bold uppercase tracking-wider text-sm bg-primary/10 px-3 py-1 rounded-full">Present Day</span>
               </div>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1e2936] rounded-2xl border border-gray-800 p-8 md:p-12 relative overflow-hidden">
               {/* Decorative Glow */}
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
               
               <div className="flex flex-col gap-10 relative z-10">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-white tracking-tight text-4xl md:text-5xl font-bold font-display leading-tight max-w-[720px]">
                      Ready to collaborate?
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-normal leading-normal max-w-[600px]">
                      I'm currently available for freelance projects and open to new opportunities. Let's build something great together.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-2">
                     <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold tracking-wide shadow-lg shadow-primary/25">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                        <span>Get in Touch</span>
                     </button>
                     <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white text-base font-medium border border-gray-700">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        <span>Resume</span>
                     </button>
                  </div>
               </div>
               
               <div className="w-full h-px bg-gray-800 mt-10"></div>

               {/* Footer */}
               <footer className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
                  <div className="flex flex-wrap justify-center gap-4">
                     {['business_center', 'terminal', 'flutter_dash', 'alternate_email'].map((icon) => (
                       <a key={icon} href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-all border border-transparent hover:border-gray-600 text-gray-400 hover:text-white">
                          <span className="material-symbols-outlined text-[24px]">{icon}</span>
                       </a>
                     ))}
                  </div>
                  <p className="text-gray-500 text-sm font-normal text-center md:text-right">
                     © 2026 Andres Hurtado Portfolio. Built with React & Tailwind.
                  </p>
               </footer>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;