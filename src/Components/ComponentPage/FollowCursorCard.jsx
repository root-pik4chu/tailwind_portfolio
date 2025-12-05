"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function FollowCursorCard({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Motion values (raw)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth easing using spring
  const smoothX = useSpring(x, { stiffness: 200, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 200, damping: 18 });

   const offsetX = 0; // 👈 minus X
  const offsetY = 0; // 👈 minus Y

  const move = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left + offsetX);
    y.set(e.clientY - rect.top + offsetY);
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-full h-full  border-white/10 border-r border-l overflow-hidden"
    >
      {children}

      {/* Cursor Follower */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute px-1 bg-amber-700 text-white rounded-md pointer-events-none"
      >
        <a className=" pointer-events-auto text-sm" href="#">
          link
        </a>
      </motion.div>
    </div>
  );
}
