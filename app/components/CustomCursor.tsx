'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // 1. Motion Values for smooth physics
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Spring configuration (snappy and responsive)
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers for links, buttons, or elements with "data-cursor" attribute
      if (target.closest('a') || target.closest('button') || target.closest('.cursor-pointer')) {
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
  }, [cursorX, cursorY]);

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
        
        {/* OUTER RING: The "Scanner" */}
        <motion.div
          className="absolute border border-indigo-500/50 rounded-full flex items-center justify-center"
          style={{
            left: smoothX,
            top: smoothY,
            x: "-50%",
            y: "-50%",
            width: isHovering ? 64 : 32,
            height: isHovering ? 64 : 32,
          }}
          animate={{
            rotate: isHovering ? 90 : 0,
            borderColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(99, 102, 241, 0.5)",
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Tactical Crosshair Corners (Only visible on hover) */}
          {isHovering && (
            <>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-white"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-white"></div>
            </>
          )}
        </motion.div>

        {/* INNER CORE: The "Selection Dot" */}
        <motion.div
          className="absolute bg-white rounded-full mix-blend-difference"
          style={{
            left: smoothX,
            top: smoothY,
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            width: isHovering ? 12 : 6,
            height: isHovering ? 12 : 6,
            scale: isPressed ? 0.8 : 1,
            backgroundColor: isHovering ? "#fff" : "#6366f1"
          }}
        />

        {/* HOVER STATUS TEXT */}
        {isHovering && (
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 40 }}
            className="absolute text-[8px] font-mono text-white uppercase tracking-[0.2em] whitespace-nowrap"
            style={{ left: smoothX, top: smoothY, y: "-50%" }}
          >
            Target_Locked
          </motion.span>
        )}
      </div>
    </>
  );
}