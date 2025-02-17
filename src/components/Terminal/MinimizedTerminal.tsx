import React from 'react';

interface MinimizedTerminalProps {
  onRestore: () => void;
}

export default function MinimizedTerminal({ onRestore }: MinimizedTerminalProps) {
  return (
    <div 
      className="fixed bottom-4 right-4 bg-gray-900 rounded-lg p-4 cursor-pointer shadow-lg hover:bg-gray-800 transition-colors"
      onClick={onRestore}
    >
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="text-gray-400 text-sm font-mono">Terminal (Click to restore)</span>
      </div>
    </div>
  );
}