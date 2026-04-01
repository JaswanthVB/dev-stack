'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          .custom-cursor-wrapper { display: none; }
          * { cursor: auto !important; }
        }
      `}</style>

      <div className="custom-cursor-wrapper fixed inset-0 pointer-events-none z-[9999]">
        {/* The Main Solid Body */}
        <div
          className={`absolute rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] 
            ${isHovering 
              ? 'w-14 h-14 bg-white opacity-100' 
              : 'w-4 h-4 bg-white opacity-100'
            }
            ${isPressed ? 'scale-75' : 'scale-100'}
          `}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `translate(-50%, -50%)`,
            mixBlendMode: 'difference' // This is the "Magic" - it makes it solid and high-contrast
          }}
        />

        {/* The Precision Crosshair Dot (Only visible when not hovering) */}
        {!isHovering && (
          <div 
            className="absolute w-1 h-1 bg-indigo-500 rounded-full"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        )}
      </div>
    </>
  );
}