import React from 'react';

interface TerminalContainerProps {
  children: React.ReactNode;
  isMaximized: boolean;
}

export function TerminalContainer({ children, isMaximized }: TerminalContainerProps) {
  return (
    <div 
      className={`bg-gray-900 rounded-lg p-4 transition-all duration-300 ${
        isMaximized 
          ? 'fixed inset-4 z-50' 
          : 'w-full max-w-xl mx-auto h-[400px] lg:h-[450px]'
      }`}
    >
      {children}
    </div>
  );
}