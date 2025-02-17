import React, { useEffect } from 'react';

export default function MatrixCursor() {
  useEffect(() => {
    const createMatrix = (e: MouseEvent) => {
      const chars = "01";
      const char = chars.charAt(Math.floor(Math.random() * chars.length));
      const digit = document.createElement('div');
      
      digit.className = 'matrix-digit';
      digit.textContent = char;
      digit.style.left = `${e.clientX}px`;
      digit.style.top = `${e.clientY}px`;
      
      document.body.appendChild(digit);
      setTimeout(() => digit.remove(), 1000);
    };

    const throttledMatrix = (e: MouseEvent) => {
      if (!throttledMatrix.lastCall || Date.now() - throttledMatrix.lastCall > 50) {
        createMatrix(e);
        throttledMatrix.lastCall = Date.now();
      }
    };
    throttledMatrix.lastCall = 0;

    window.addEventListener('mousemove', throttledMatrix);
    return () => window.removeEventListener('mousemove', throttledMatrix);
  }, []);

  return null;
}