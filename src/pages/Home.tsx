import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal/Terminal';
import SocialLinks from '../components/SocialLinks';
import { initializeEasterEggs } from '../utils/easterEggs';

export default function Home() {
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);

  useEffect(() => {
    initializeEasterEggs();
    if (!localStorage.getItem('hasVisited')) {
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className={`grid ${isTerminalMinimized ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} gap-8 items-center`}>
          <div className={`text-center ${isTerminalMinimized ? 'lg:text-center' : 'lg:text-right'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 animate-float tracking-tight font-noto">
              Amandeep
              <br />
              Singh
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8">
              Software Developer
            </h2>
            <div className={`flex justify-center ${isTerminalMinimized ? 'lg:justify-center' : 'lg:justify-end'}`}>
              <SocialLinks />
            </div>
          </div>

          <div className={`w-full ${isTerminalMinimized ? 'max-w-lg mx-auto' : ''}`}>
            <Terminal 
              onMinimize={setIsTerminalMinimized} 
              isMinimized={isTerminalMinimized} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}