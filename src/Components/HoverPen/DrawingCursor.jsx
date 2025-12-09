import React from "react";
import { useEffect, useRef }  from "react";
import gsap from "gsap";

export default function DrawingCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const points = [];
    const MAX_LIFE = 2;

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    function pushPoint(x, y) {
      const p = {
        x,
        y,
        created: performance.now() / 1000,
        life: MAX_LIFE,
        alpha: 1
      };
      points.push(p);

      gsap.to(p, {
        alpha: 0,
        duration: MAX_LIFE,
        ease: "expo"
      });
    }

    

    const move = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pushPoint(pointer.x, pointer.y);
    };

    window.addEventListener("mousemove", move);

    gsap.ticker.fps(60);
    gsap.ticker.add(() => {
      const now = performance.now() / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // cleanup old
      while (points.length && now - points[0].created > MAX_LIFE) {
        points.shift();
      }

      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#fff";

      for (let i = 1; i < points.length; i++) {
        const p1 = points[i - 1];
        const p2 = points[i];

        ctx.globalAlpha = p1.alpha;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      // visible cursor head
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 1, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        cursor: "none"
      }}
    />
  );
}
