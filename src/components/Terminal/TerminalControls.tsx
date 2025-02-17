import React from 'react';
import { Minus, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalControlsProps {
  onMinimize: () => void;
  onMaximize: () => void;
  isMaximized: boolean;
}

export default function TerminalControls({ onMinimize, onMaximize, isMaximized }: TerminalControlsProps) {
  return (
    <div className="flex items-center justify-between mb-4 select-none">
      <div className="flex space-x-2">
        <button 
          onClick={onMinimize}
          className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors flex items-center justify-center group"
          aria-label="minimize"
        >
          <Minus size={10} className="text-yellow-900 opacity-0 group-hover:opacity-100" />
        </button>
        <button 
          onClick={onMaximize}
          className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center group"
          aria-label="maximize"
        >
          {isMaximized ? 
            <Minimize2 size={10} className="text-green-900 opacity-0 group-hover:opacity-100" /> :
            <Maximize2 size={10} className="text-green-900 opacity-0 group-hover:opacity-100" />
          }
        </button>
      </div>
    </div>
  );
}