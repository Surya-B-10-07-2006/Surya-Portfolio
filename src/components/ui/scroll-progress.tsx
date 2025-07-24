import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      
      setScrollProgress(Math.min(scrolled, 100));
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-50">
      <div 
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent-purple transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div 
        className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{ left: `${Math.max(0, scrollProgress - 4)}%` }}
      />
    </div>
  );
};

export default ScrollProgress;