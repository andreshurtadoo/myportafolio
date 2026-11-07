import React from 'react';

const MilestoneTransition: React.FC = () => {
  return (
    <section className="min-h-[60vh] w-full flex flex-col items-center justify-center relative border-y border-slate-800 bg-[#101922] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-[#101922]/70"></div>

      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-white">Previous Chapter</h2>
        <p className="text-slate-400">Scroll down to see 2021-2023 milestones</p>
        <div className="mt-8 flex justify-center">
             <span className="material-symbols-outlined text-primary text-4xl animate-bounce">keyboard_arrow_down</span>
        </div>
      </div>

      {/* Connecting Lines for Timeline Continuity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-slate-600 to-transparent opacity-50 hidden lg:block"></div>
    </section>
  );
};

export default MilestoneTransition;