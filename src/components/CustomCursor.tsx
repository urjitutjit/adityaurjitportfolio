import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'A' || 
                         target.tagName === 'BUTTON' || 
                         target.onclick !== null || 
                         target.style.cursor === 'pointer' ||
                         !!target.closest('a') ||
                         !!target.closest('button') ||
                         !!target.closest('[role="button"]');
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-150 ease-out mix-blend-difference ${
          isPointer ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        }}
      >
        <div 
          className={`w-3 h-3 rounded-full transition-all duration-150 ${
            isPointer 
              ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]' 
              : 'bg-primary shadow-[0_0_15px_hsl(var(--primary)/0.6)]'
          }`} 
        />
      </div>

      {/* Trailing glow effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      >
        <div 
          className={`w-6 h-6 rounded-full transition-all duration-300 ${
            isPointer 
              ? 'bg-white/20 scale-125' 
              : 'bg-primary/20 scale-100'
          }`} 
        />
      </div>
    </>
  );
};

export default CustomCursor;