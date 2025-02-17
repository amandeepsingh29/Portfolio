import { useState, useRef, useEffect } from 'react';
import { commands } from '../../../utils/commands';

export function useTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome! Type "help" to see available commands']);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().toLowerCase().split(' ');
    const commandFn = commands[command];
    
    let output: string;
    if (typeof commandFn === 'function') {
      output = commandFn(args);
    } else if (typeof commandFn === 'string') {
      output = commandFn === 'CLEAR_TERMINAL' ? '' : commandFn;
    } else {
      output = 'Command not found. Type "help" for available commands.';
    }
    
    if (output === '') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, `> ${cmd}`, output]);
    }
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return {
    input,
    setInput,
    history,
    handleKeyDown,
    inputRef,
    terminalRef,
  };
}