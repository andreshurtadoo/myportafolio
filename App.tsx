import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EarlyProjects from './components/EarlyProjects';
import MilestoneTransition from './components/MilestoneTransition';
import Academic from './components/Academic';
import FeaturedProject from './components/FeaturedProject';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#101922] selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <EarlyProjects />
        <MilestoneTransition />
        <Academic />
        <FeaturedProject />
        <Contact />
      </main>
    </div>
  );
};

export default App;