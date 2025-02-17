import React from 'react';

interface TerminalHeaderProps {
  title: string;
}

export default function TerminalHeader({ title }: TerminalHeaderProps) {
  return (
    <div className="text-gray-400 text-sm font-mono">~/Welcome to my ML Portfolio</div>
  );
}