import React, { useEffect } from 'react';

export default function CursorFlare() {
  useEffect(() => {
    const createFlare = (e: MouseEvent) => {
      const flare = document.createElement('div');
      flare.className = 'cursor-flare';
      flare.style.left = `${e.clientX}px`;
      flare.style.top = `${e.clientY}px`;
      document.body.appendChild(flare);

      setTimeout(() => {
        flare.remove();
      }, 1000);
    };

    window.addEventListener('mousemove', createFlare);
    return () => window.removeEventListener('mousemove', createFlare);
  }, []);

  return null;
}