
import { useState, useEffect, useRef } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      const visibleStart = Math.max(0, scrollPosition - sectionTop + viewportHeight * 0.25);
      const visibleEnd = Math.min(sectionHeight, scrollPosition + viewportHeight - sectionTop - viewportHeight * 0.25);
      
      const newProgress = Math.max(0, Math.min(1, visibleStart / (sectionHeight - viewportHeight * 0.5)));
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { progress, ref };
};
