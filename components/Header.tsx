import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#101922]/80 backdrop-blur-md px-6 py-4 md:px-10 lg:px-20 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center size-8 bg-primary/20 rounded-lg text-primary">
          <span className="material-symbols-outlined text-[20px]">terminal</span>
        </div>
        <h2 className="text-white text-lg font-bold tracking-tight font-display">Andrés Hurtado</h2>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">About</a>
        <a href="#experience" className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">Experience</a>
        <a href="#projects" className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">Projects</a>
        <a href="#contact" className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-9 px-4 border border-white/20 hover:border-primary hover:text-primary bg-transparent text-white text-sm font-bold transition-all">
          Resume
        </button>
        <button className="md:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;