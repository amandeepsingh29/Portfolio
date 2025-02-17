import React, { useState } from 'react';
import TerminalHeader from './TerminalHeader';
import TerminalContent from './TerminalContent';
import TerminalControls from './TerminalControls';
import MinimizedTerminal from './MinimizedTerminal';
import { TerminalContainer } from './TerminalContainer';

interface TerminalProps {
  onMinimize: (minimized: boolean) => void;
  isMinimized: boolean;
}

export default function Terminal({ onMinimize, isMinimized }: TerminalProps) {
  const [isMaximized, setIsMaximized] = useState(false);

  if (isMinimized) {
    return <MinimizedTerminal onRestore={() => onMinimize(false)} />;
  }

  return (
    <TerminalContainer isMaximized={isMaximized}>
      <TerminalControls 
        onMinimize={() => onMinimize(true)}
        onMaximize={() => setIsMaximized(!isMaximized)}
        isMaximized={isMaximized}
      />
      <TerminalHeader title="Welcome to my ML Portfolio" />
      <TerminalContent />
    </TerminalContainer>
  );
}