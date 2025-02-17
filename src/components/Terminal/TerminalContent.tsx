import React from 'react';
import { useTerminal } from './hooks/useTerminal';
import './styles/terminal.css';

export default function TerminalContent() {
  const {
    input,
    setInput,
    history,
    handleKeyDown,
    inputRef,
    terminalRef,
  } = useTerminal();

  return (
    <div 
      ref={terminalRef}
      className="terminal-content h-[calc(100%-3rem)] overflow-auto font-mono"
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((line, i) => (
        <div key={i} className="terminal-text text-gray-200 mb-1 break-words whitespace-pre-wrap">
          {line}
        </div>
      ))}
      
      <div className="flex items-center text-gray-200">
        <span className="text-green-400 mr-2 shrink-0">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none terminal-text"
          autoFocus
        />
      </div>
    </div>
  );
}