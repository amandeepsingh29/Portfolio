export const initializeEasterEggs = (): void => {
  // Matrix effect (Konami code)
  let konamiKeys: string[] = [];
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  // Rainbow mode
  let rainbowKeys = '';
  let rainbowInterval: number | null = null;
  
  // Shake effect
  let shakeKeys = '';
  
  // Spin elements
  let spinKeys = '';
  
  const handleKeySequence = (e: KeyboardEvent) => {
    // Guard against undefined key
    if (!e.key) return;

    // Konami code handler
    konamiKeys.push(e.key);
    konamiKeys = konamiKeys.slice(-10);
    if (konamiKeys.join(',') === konamiCode.join(',')) {
      document.body.classList.add('matrix-background');
      setTimeout(() => document.body.classList.remove('matrix-background'), 10000);
    }
    
    const key = e.key.toLowerCase();
    
    // Rainbow mode handler
    rainbowKeys += key;
    rainbowKeys = rainbowKeys.slice(-7);
    if (rainbowKeys === 'rainbow') {
      if (rainbowInterval) {
        clearInterval(rainbowInterval);
        rainbowInterval = null;
      }
      let hue = 0;
      rainbowInterval = window.setInterval(() => {
        document.documentElement.style.filter = `hue-rotate(${hue}deg)`;
        hue = (hue + 10) % 360;
      }, 100);
      setTimeout(() => {
        if (rainbowInterval) {
          clearInterval(rainbowInterval);
          rainbowInterval = null;
        }
        document.documentElement.style.filter = '';
      }, 5000);
    }
    
    // Shake effect handler
    shakeKeys += key;
    shakeKeys = shakeKeys.slice(-5);
    if (shakeKeys === 'shake') {
      document.body.style.animation = 'shake 0.5s';
      document.body.style.animationIterationCount = '2';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 1000);
    }
    
    // Spin elements handler
    spinKeys += key;
    spinKeys = spinKeys.slice(-4);
    if (spinKeys === 'spin') {
      const elements = document.querySelectorAll('div');
      elements.forEach(el => {
        el.style.transition = 'transform 1s ease';
        el.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          el.style.transition = '';
          el.style.transform = '';
        }, 1000);
      });
    }
  };

  // Add keydown event listener
  window.addEventListener('keydown', handleKeySequence);

  // Add CSS for shake animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-10px); }
      75% { transform: translateX(10px); }
    }
  `;
  document.head.appendChild(style);
};